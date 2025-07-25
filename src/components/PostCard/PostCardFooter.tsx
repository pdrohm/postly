import React from "react";
import { View, Text } from "react-native";
import moment from "moment";
import { postCardFooterStyles } from "./styles/PostCardFooter.styles";
import LatestComment from "./LatestComment";
import type { Comment } from "../../types/post";

interface PostCardFooterProps {
  name: string;
  description: string;
  createdAt: string;
  latestComment?: Comment;
}

const PostCardFooter: React.FC<PostCardFooterProps> = ({
  name,
  description,
  createdAt,
  latestComment,
}) => (
  <View style={postCardFooterStyles.footer}>
    <Text style={postCardFooterStyles.name}>{name}</Text>
    <Text style={postCardFooterStyles.description}>{description}</Text>
    {latestComment && <LatestComment comment={latestComment} />}
    <Text style={postCardFooterStyles.createdAt}>
      {moment(createdAt).fromNow()}
    </Text>
  </View>
);

export default PostCardFooter; 