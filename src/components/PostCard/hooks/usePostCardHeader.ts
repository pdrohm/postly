import type { Post } from '../../../types/post';

export const usePostCardHeader = (post: Post) => {
  return {
    avatarUrl: post.avatar, // fixed property name
    name: post.name,
  };
}; 