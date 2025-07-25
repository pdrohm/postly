import React, { useCallback } from "react";
import { View, FlatList, Text } from "react-native";
import { useHomeScreen } from "./hooks/useHomeScreen";
import type { Post } from "../../types/post";
import PostCard from "../../components/PostCard/PostCard";
import { PostCardSkeleton } from "../../components/PostCard/PostCardSkeleton";
import { homeScreenStyles } from "./styles/HomeScreen.styles";
import CommentSection from "../../components/CommentSection/CommentSection";

const POST_CARD_HEIGHT = 300;

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

  const renderItem = useCallback(
    ({ item }: { item: Post }) => (
      <PostCard post={item} onCommentPress={handleCommentPress} />
    ),
    [handleCommentPress]
  );

  const keyExtractor = useCallback((item: Post) => item.id, []);

  if (isLoading) {
    return (
      <FlatList
        style={homeScreenStyles.container}
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <PostCardSkeleton />}
        contentContainerStyle={homeScreenStyles.listContent}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={5}
        removeClippedSubviews
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
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={homeScreenStyles.listContent}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={10}
        removeClippedSubviews
        onEndReachedThreshold={0.5}
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
