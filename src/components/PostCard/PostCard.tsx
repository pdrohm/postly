import React, { useState, useMemo, useEffect } from "react";
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
import AnimatedHeart from "./AnimatedHeart";

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
    imageError,
    setImageError,
    fallbackImage,
    imageUrl,
    latestComment,
  } = usePostCard({ post });

  const headerProps = usePostCardHeader(post);

  const [showHeart, setShowHeart] = useState(false);
  const triggerHeart = () => {
    setShowHeart(false);
    setTimeout(() => setShowHeart(true), 10);
  };

  const doubleTapGesture = useMemo(() =>
    Gesture.Tap()
      .numberOfTaps(2)
      .onStart(() => {
        if (!isLiked) {
          triggerHeart();
        }
        toggleLike(post.id);
      })
      .runOnJS(true)
  , [post.id, toggleLike, isLiked]);

  const handleLikePress = () => {
    if (!isLiked) {
      triggerHeart();
    }
    toggleLike(post.id);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showHeart) {
      timer = setTimeout(() => setShowHeart(false), 800);
    }
    return () => timer && clearTimeout(timer);
  }, [showHeart]);

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
    onLikePress: handleLikePress,
    onCommentPress: () => onCommentPress && onCommentPress(post.id),
    onSavePress: () => toggleSave(post.id),
  });

  const postCardFooterProps = usePostCardFooter(post, latestComment);

  return (
    <View style={postCardStyles.container}>
      <PostCardHeader {...headerProps} />
      <View style={{ position: "relative" }}>
        <PostCardImage {...postCardImageProps} />
        {showHeart && <AnimatedHeart trigger={showHeart} />}
      </View>
      <PostCardActions {...postCardActionsProps} />
      <PostCardFooter {...postCardFooterProps} />
    </View>
  );
};

export default React.memo(PostCard);
