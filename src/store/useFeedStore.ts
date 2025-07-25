import { create } from 'zustand';
import type { Post } from '../types/post';

interface PostActionsState {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  setPostsAndSaved: (posts: Post[]) => void;
  likes: Record<string, boolean>; // legacy, will be replaced
  saved: Record<string, boolean>;
  comments: Record<string, number>;
  likeCounts: Record<string, number>;
  liked: Record<string, boolean>;
  toggleLike: (id: string) => void;
  toggleSave: (id: string) => void;
  addComment: (id: string) => void;
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
  addComment: (id) => set((state) => ({
    comments: { ...state.comments, [id]: (state.comments[id] || 0) + 1 },
  })),
})); 