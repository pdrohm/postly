import React from "react";
import { Image } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { postCardImageStyles } from "./styles/PostCardImage.styles";

interface PostCardImageProps {
  imageUrl: string;
  fallbackImage: string;
  imageError: boolean;
  setImageError: (error: boolean) => void;
  postName: string;
  doubleTapGesture: any;
}

const PostCardImage: React.FC<PostCardImageProps> = ({
  imageUrl,
  fallbackImage,
  imageError,
  setImageError,
  postName,
  doubleTapGesture,
}) => (
  <GestureDetector gesture={doubleTapGesture}>
    <Image
      source={{ uri: imageError ? fallbackImage : imageUrl }}
      style={postCardImageStyles.image}
      accessibilityLabel={`Post image by ${postName}`}
      onError={(e) => {
        setImageError(true);
        console.error("Image failed to load:", imageUrl, e.nativeEvent);
      }}
    />
  </GestureDetector>
);

export default PostCardImage; 