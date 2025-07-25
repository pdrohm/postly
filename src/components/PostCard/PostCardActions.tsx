import React from "react";
import { View, Text, Pressable } from "react-native";
import { FontAwesome, Feather, MaterialIcons } from "@expo/vector-icons";
import { postCardActionsStyles } from "./styles/PostCardActions.styles";

interface PostCardActionsProps {
  isLiked: boolean;
  isSaved: boolean;
  likeCount: number;
  commentCount: number;
  onLikePress: () => void;
  onCommentPress: () => void;
  onSavePress: () => void;
}

const PostCardActions: React.FC<PostCardActionsProps> = ({
  isLiked,
  isSaved,
  likeCount,
  commentCount,
  onLikePress,
  onCommentPress,
  onSavePress,
}) => (
  <View style={postCardActionsStyles.actions}>
    <View style={postCardActionsStyles.leftActions}>
      <Pressable
        onPress={onLikePress}
        accessibilityLabel={isLiked ? "Unlike post" : "Like post"}
        accessibilityRole="button"
      >
        <FontAwesome
          name={isLiked ? "heart" : "heart-o"}
          size={22}
          color={isLiked ? "#e74c3c" : "#222"}
        />
      </Pressable>
      <Text style={postCardActionsStyles.actionText}>{likeCount}</Text>
      <Pressable
        onPress={onCommentPress}
        accessibilityLabel="Add comment"
        accessibilityRole="button"
      >
        <Feather name="message-circle" size={22} color="#222" />
      </Pressable>
    </View>
    
    <View style={postCardActionsStyles.rightActions}>
      <Pressable
        onPress={onSavePress}
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
  </View>
);

export default PostCardActions; 