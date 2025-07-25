import React from "react";
import { View, Text, Image } from "react-native";
import { postCardHeaderStyles } from "./styles/PostCardHeader.styles";

interface PostCardHeaderProps {
  avatarUrl: string;
  name: string;
}

const PostCardHeader: React.FC<PostCardHeaderProps> = ({ avatarUrl, name }) => (
  <View style={postCardHeaderStyles.header}>
    <Image
      source={{ uri: avatarUrl }}
      style={postCardHeaderStyles.avatar}
      accessibilityLabel={`${name} profile picture`}
    />
    <Text style={postCardHeaderStyles.name}>{name}</Text>
  </View>
);

export default PostCardHeader; 