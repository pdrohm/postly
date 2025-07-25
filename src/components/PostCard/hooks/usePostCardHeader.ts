import type { Post } from '../../../types/post';
import { AVATAR_URLS } from '../../../constants';

export const usePostCardHeader = (post: Post) => {
  return {
    avatarUrl: AVATAR_URLS.POST(post.id),
    name: post.name,
  };
}; 