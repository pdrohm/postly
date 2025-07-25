import React, { useState } from "react";
import { View } from "react-native";
import type { Post } from "../../types/post";
import { postCardStyles } from "./styles/PostCard.styles";
import { usePostCard } from "./hooks/usePostCard";
import { Gesture } from "react-native-gesture-handler";
import PostCardHeader from "./PostCardHeader";
import { usePostCardHeader } from "./hooks/usePostCardHeader";
import PostCardImage from "./PostCardImage";
import { usePostCardImage } from "./hooks/usePostCardImage";
import PostCardActions from "./PostCardActions";
import { usePostCardActions } from "./hooks/usePostCardActions";
import PostCardFooter from "./PostCardFooter";
import { usePostCardFooter } from "./hooks/usePostCardFooter";

interface PostCardProps {
  post: Post;
  onCommentPress?: (postId: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onCommentPress }) => {
  const {
    isLiked,
    isSaved,
    likeCount,
    commentCount,
    toggleLike,
    toggleSave,
    addComment,
    avatarUrl,
    imageError,
    setImageError,
    fallbackImage,
    imageUrl,
    latestComment,
  } = usePostCard({ post });

  const headerProps = usePostCardHeader(post);

  const doubleTapGesture = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      toggleLike(post.id);
    });

  const postCardImageProps = usePostCardImage({
    imageUrl,
    fallbackImage,
    imageError,
    setImageError,
    postName: post.name,
    doubleTapGesture,
  });

  const postCardActionsProps = usePostCardActions({
    isLiked,
    isSaved,
    likeCount,
    commentCount,
    onLikePress: () => toggleLike(post.id),
    onCommentPress: () => onCommentPress && onCommentPress(post.id),
    onSavePress: () => toggleSave(post.id),
  });

  const postCardFooterProps = usePostCardFooter(post, latestComment);

  return (
    <View style={postCardStyles.container}>
      <PostCardHeader {...headerProps} />
      <PostCardImage {...postCardImageProps} />
      <PostCardActions {...postCardActionsProps} />
      <PostCardFooter {...postCardFooterProps} />
    </View>
  );
};

export default PostCard;
