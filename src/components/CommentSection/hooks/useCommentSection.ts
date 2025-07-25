import { useCallback, useState } from 'react';
import { useFeedStore } from '../../../store/useFeedStore';
import type { Comment } from '../../../types/post';
import type { PostActionsState } from '../../../store/useFeedStore';
import { AVATAR_URLS } from '../../../constants';

export function useCommentSection(postId: string) {
  const [input, setInput] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const comments = useFeedStore((s: PostActionsState) => s.getComments(postId));
  const addComment = useFeedStore((s: PostActionsState) => s.addComment);

  const handleAddComment = useCallback(() => {
    if (!input.trim()) return;
    setSubmitting(true);
    // For demo: fake user info
    const newComment: Comment = {
      id: Math.random().toString(36).slice(2),
      postId,
      user: 'You',
      avatar: AVATAR_URLS.PROFILE,
      text: input,
      createdAt: new Date().toISOString(),
    };
    addComment(newComment);
    setInput('');
    setSubmitting(false);
  }, [input, postId, addComment]);

  return {
    input,
    setInput,
    submitting,
    comments,
    handleAddComment,
  };
} 