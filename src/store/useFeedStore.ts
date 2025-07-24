import { create } from 'zustand';

interface PostActionsState {
  likes: Record<string, boolean>;
  saved: Record<string, boolean>;
  comments: Record<string, number>;
  toggleLike: (id: string) => void;
  toggleSave: (id: string) => void;
  addComment: (id: string) => void;
}

export const useFeedStore = create<PostActionsState>((set) => ({
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
    likes: { ...state.likes }, // preserve likes
    saved: { ...state.saved }, // preserve saved
  })),
})); 