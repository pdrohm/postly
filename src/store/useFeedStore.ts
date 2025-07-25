import { create } from 'zustand';
import type { Post, Comment } from '../types/post';

export interface PostActionsState {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  setPostsAndSaved: (posts: Post[]) => void;
  likes: Record<string, boolean>; // legacy, will be replaced
  saved: Record<string, boolean>;
  comments: Record<string, number>;
  likeCounts: Record<string, number>;
  liked: Record<string, boolean>;
  commentsByPost: Record<string, Comment[]>;
  toggleLike: (id: string) => void;
  toggleSave: (id: string) => void;
  addComment: (comment: Comment) => void;
  getComments: (postId: string) => Comment[];
}

export const useFeedStore = create<PostActionsState>((set, get) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
  setPostsAndSaved: (posts) => set((state) => ({
    posts,
    saved: {
      ...state.saved,
      ...Object.fromEntries(posts.filter((p) => p.saved).map((p) => [p.id, true]))
    },
    likeCounts: {
      ...state.likeCounts,
      ...Object.fromEntries(posts.map((p) => [p.id, p.likes ?? 0]))
    },
    liked: {
      ...state.liked,
      ...Object.fromEntries(posts.map((p) => [p.id, p.liked ?? false]))
    }
  })),
  likes: {}, // legacy
  saved: {},
  comments: {},
  likeCounts: {},
  liked: {},
  commentsByPost: {},
  toggleLike: (id) => set((state) => {
    const isLiked = state.liked[id] ?? false;
    const currentCount = state.likeCounts[id] ?? 0;
    return {
      liked: { ...state.liked, [id]: !isLiked },
      likeCounts: {
        ...state.likeCounts,
        [id]: isLiked ? Math.max(0, currentCount - 1) : currentCount + 1,
      },
    };
  }),
  toggleSave: (id) => set((state) => ({
    saved: { ...state.saved, [id]: !state.saved[id] },
  })),
  addComment: (comment) => set((state) => ({
    commentsByPost: {
      ...state.commentsByPost,
      [comment.postId]: [
        ...(state.commentsByPost[comment.postId] || []),
        comment,
      ],
    },
    comments: {
      ...state.comments,
      [comment.postId]: (state.comments[comment.postId] || 0) + 1,
    },
  })),
  getComments: (postId) => get().commentsByPost[postId] || [],
})); 