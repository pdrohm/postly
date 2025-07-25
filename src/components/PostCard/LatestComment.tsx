import React from "react";
import { View, Text, Image } from "react-native";
import moment from "moment";
import { latestCommentStyles } from "./styles/LatestComment.styles";
import type { Comment } from "../../types/post";

interface LatestCommentProps {
  comment: Comment;
}

const LatestComment: React.FC<LatestCommentProps> = ({ comment }) => (
  <View style={latestCommentStyles.container}>
    {comment.avatar ? (
      <Image
        source={{ uri: comment.avatar }}
        style={latestCommentStyles.avatar}
        accessibilityLabel={`${comment.user} profile picture`}
      />
    ) : (
      <View style={latestCommentStyles.fallbackAvatar}>
        <Text style={latestCommentStyles.fallbackText}>👤</Text>
      </View>
    )}
    <View style={latestCommentStyles.content}>
      <View style={latestCommentStyles.header}>
        <Text 
          style={latestCommentStyles.userName} 
          accessibilityLabel={`Latest comment by ${comment.user}`}
        >
          {comment.user}
        </Text>
        <Text 
          style={latestCommentStyles.timestamp} 
          accessibilityLabel={`Commented ${moment(comment.createdAt).fromNow()}`}
        >
          {moment(comment.createdAt).fromNow()}
        </Text>
      </View>
      <Text style={latestCommentStyles.text}>{comment.text}</Text>
    </View>
  </View>
);

export default LatestComment; 