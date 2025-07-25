import type { Post, Comment } from '../../../types/post';

export const usePostCardFooter = (post: Post, latestComment?: Comment) => {
  return {
    name: post.name,
    description: post.description,
    createdAt: post.createdAt,
    latestComment,
  };
}; 