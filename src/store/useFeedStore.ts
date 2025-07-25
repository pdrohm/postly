import { create } from 'zustand';
import type { Post } from '../types/post';

interface PostActionsState {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  setPostsAndSaved: (posts: Post[]) => void;
  likes: Record<string, boolean>;
  saved: Record<string, boolean>;
  comments: Record<string, number>;
  toggleLike: (id: string) => void;
  toggleSave: (id: string) => void;
  addComment: (id: string) => void;
}

export const useFeedStore = create<PostActionsState>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
  setPostsAndSaved: (posts) => set((state) => ({
    posts,
    saved: {
      ...state.saved,
      ...Object.fromEntries(posts.filter((p) => p.saved).map((p) => [p.id, true]))
    }
  })),
  likes: {},
  saved: {},
  comments: {},
  toggleLike: (id) => set((state) => ({
    likes: { ...state.likes, [id]: !state.likes[id] },
  })),
  toggleSave: (id) => set((state) => ({
    saved: { ...state.saved, [id]: !state.saved[id] },
  })),
  addComment: (id) => set((state) => ({
    comments: { ...state.comments, [id]: (state.comments[id] || 0) + 1 },
    likes: { ...state.likes }, 
    saved: { ...state.saved }, 
  })),
})); 