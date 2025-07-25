import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import type { Post } from "../../types/post";
import { postCardStyles } from "./styles/PostCard.styles";
import moment from "moment";
import { FontAwesome, Feather, MaterialIcons } from "@expo/vector-icons";
import { usePostCard } from "./hooks/usePostCard";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const {
    isLiked,
    isSaved,
    commentCount,
    toggleLike,
    toggleSave,
    addComment,
    avatarUrl,
    imageError,
    setImageError,
    fallbackImage,
    imageUrl,
  } = usePostCard({ post });

  const doubleTapGesture = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      toggleLike(post.id);
    });

  return (
    <View style={postCardStyles.container}>
      <View style={postCardStyles.header}>
        <Image
          source={{ uri: avatarUrl }}
          style={postCardStyles.avatar}
          accessibilityLabel={`${post.name} profile picture`}
        />
        <Text style={postCardStyles.name}>{post.name}</Text>
      </View>
      <GestureDetector gesture={doubleTapGesture}>
        <Image
          source={{ uri: imageError ? fallbackImage : imageUrl }}
          style={postCardStyles.image}
          accessibilityLabel={`Post image by ${post.name}`}
          onError={(e) => {
            setImageError(true);
            console.error("Image failed to load:", imageUrl, e.nativeEvent);
          }}
        />
      </GestureDetector>
      <View style={postCardStyles.actions}>
        <Pressable
          onPress={() => toggleLike(post.id)}
          accessibilityLabel={isLiked ? "Unlike post" : "Like post"}
          accessibilityRole="button"
        >
          <FontAwesome
            name={isLiked ? "heart" : "heart-o"}
            size={22}
            color={isLiked ? "#e74c3c" : "#222"}
          />
        </Pressable>
        <Text style={postCardStyles.actionText}>{commentCount}</Text>
        <Pressable
          onPress={() => addComment(post.id)}
          accessibilityLabel="Add comment"
          accessibilityRole="button"
        >
          <Feather name="message-circle" size={22} color="#222" />
        </Pressable>
        <Pressable
          onPress={() => toggleSave(post.id)}
          accessibilityLabel={isSaved ? "Unsave post" : "Save post"}
          accessibilityRole="button"
        >
          <MaterialIcons
            name={isSaved ? "bookmark" : "bookmark-outline"}
            size={22}
            color={isSaved ? "#2980b9" : "#222"}
          />
        </Pressable>
      </View>
      <View style={postCardStyles.footer}>
        <Text style={postCardStyles.name}>{post.name}</Text>
        <Text style={postCardStyles.description}>{post.description}</Text>
        <Text style={postCardStyles.createdAt}>
          {moment(post.createdAt).fromNow()}
        </Text>
      </View>
    </View>
  );
};

export default PostCard;
