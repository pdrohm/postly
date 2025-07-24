import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../../../api/postsApi';
import type { Post } from '../../../types/post';

export function useHomeScreen() {
  const {
    data: posts = [],
    isLoading,
    isError,
    refetch,
  } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  return {
    posts,
    isLoading,
    isError,
    refetch,
  };
} 