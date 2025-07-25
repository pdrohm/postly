import { useState } from "react";
import { useFeedStore } from "../../../store/useFeedStore";
import { Post } from "../../../types/post";

export function usePostCard({post}: {post: Post}) {
    const {
        likeCounts,
        liked,
        saved,
        comments,
        toggleLike,
        toggleSave,
        addComment,
      } = useFeedStore();
    
    const isLiked = liked[post.id] ?? post.liked;
    const isSaved = saved[post.id] ?? post.saved;
    const likeCount = likeCounts[post.id] ?? post.likes ?? 0;
    const commentCount = (comments[post.id] ?? post.comments);
    const commentsForPost = useFeedStore((s) => s.getComments(post.id));
    const latestComment = commentsForPost.length > 0 ? commentsForPost[commentsForPost.length - 1] : undefined;
    const [imageError, setImageError] = useState(false);  

    const avatarUrl = `https://i.pravatar.cc/304?u=${post.id}`;
    const imageUrl = `https://picsum.photos/600/400?random=${post.id}`;
    const fallbackImage = 'https://placekitten.com/400/300';
  
  
  return {
    isLiked,
    isSaved,
    likeCount,
    commentCount,
    imageUrl,
    imageError,
    setImageError,
    toggleLike,
    toggleSave,
    addComment,
    fallbackImage,
    avatarUrl,
    latestComment,
  };
}