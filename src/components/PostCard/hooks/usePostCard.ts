import { useState } from "react";
import { useFeedStore } from "../../../store/useFeedStore";
import { Post } from "../../../types/post";

export function usePostCard({post}: {post: Post}) {
    const {
        likes,
        saved,
        comments,
        toggleLike,
        toggleSave,
        addComment,
      } = useFeedStore();
    
    const isLiked = likes[post.id] ?? post.liked;
    const isSaved = saved[post.id] ?? post.saved;
    const commentCount = (comments[post.id] ?? post.comments);
    const [imageError, setImageError] = useState(false);  

    const avatarUrl = `https://i.pravatar.cc/304?u=${post.id}`;
    const imageUrl = `https://picsum.photos/600/400?random=${post.id}`;
    const fallbackImage = 'https://placekitten.com/400/300';
  
  
  return {
    isLiked,
    isSaved,
    commentCount,
    imageUrl,
    imageError,
    setImageError,
    toggleLike,
    toggleSave,
    addComment,
    fallbackImage,
    avatarUrl,

  };
}