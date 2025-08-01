import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../../api/postsApi";
import { useFeedStore } from "../../../store/useFeedStore";
import type { Post } from "../../../types/post";

export function useHomeScreen() {
  const [commentSectionVisible, setCommentSectionVisible] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const { posts, setPostsAndSaved } = useFeedStore();
  const {
    data: fetchedPosts,
    isLoading,
    isError,
    refetch,
  } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  useEffect(() => {
    if (fetchedPosts && Array.isArray(fetchedPosts)) {
      setPostsAndSaved(fetchedPosts);
    }
  }, [fetchedPosts, setPostsAndSaved]);


  const handleCommentPress = (postId: string) => {
    setSelectedPostId(postId);
    setCommentSectionVisible(true);
  };

  const handleCloseCommentSection = () => {
    setCommentSectionVisible(false);
    setSelectedPostId(null);
  };

  return {
    posts,
    isLoading,
    isError,
    refetch,
    commentSectionVisible,
    handleCommentPress,
    handleCloseCommentSection,
    selectedPostId,
  };
}
