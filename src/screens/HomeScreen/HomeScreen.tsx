import React from "react";
import { View, FlatList, Text } from "react-native";
import { useHomeScreen } from "./hooks/useHomeScreen";
import type { Post } from "../../types/post";
import PostCard from "../../components/PostCard/PostCard";
import { PostCardSkeleton } from "../../components/PostCard/PostCardSkeleton";
import { homeScreenStyles } from "./styles/HomeScreen.styles";
import CommentSection from "../../components/CommentSection/CommentSection";

const HomeScreen: React.FC = () => {
  const {
    posts,
    isLoading,
    isError,
    refetch,
    commentSectionVisible,
    handleCommentPress,
    handleCloseCommentSection,
    selectedPostId,
  } = useHomeScreen();

  if (isLoading) {
    return (
      <FlatList
        style={homeScreenStyles.container}
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <PostCardSkeleton />}
        contentContainerStyle={homeScreenStyles.listContent}
      />
    );
  }

  if (isError) {
    return (
      <View style={homeScreenStyles.container}>
        <Text>Failed to load posts.</Text>
        <Text onPress={() => refetch()} style={{ color: "blue", marginTop: 8 }}>
          Try Again
        </Text>
      </View>
    );
  }

  return (
    <>
      <FlatList
        style={homeScreenStyles.container}
        data={posts}
        keyExtractor={(item: Post) => item.id}
        renderItem={({ item }) => (
          <PostCard post={item} onCommentPress={handleCommentPress} />
        )}
        contentContainerStyle={homeScreenStyles.listContent}
      />
      <CommentSection
        visible={commentSectionVisible}
        onClose={handleCloseCommentSection}
        postId={selectedPostId || ""}
      />
    </>
  );
};

export default HomeScreen;
