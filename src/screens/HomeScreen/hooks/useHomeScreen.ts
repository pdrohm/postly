import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../../../api/postsApi';
import { useFeedStore } from '../../../store/useFeedStore';
import type { Post } from '../../../types/post';

export function useHomeScreen() {
  const { posts, setPostsAndSaved } = useFeedStore();
  const {
    data: fetchedPosts,
    isLoading,
    isError,
    refetch,
  } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  useEffect(() => {
    if (fetchedPosts && Array.isArray(fetchedPosts)) {
      setPostsAndSaved(fetchedPosts);
    }
  }, [fetchedPosts, setPostsAndSaved]);

  return {
    posts,
    isLoading,
    isError,
    refetch,
  };
} 