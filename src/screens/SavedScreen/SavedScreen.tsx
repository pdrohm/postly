import React from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";
import { useFeedStore } from "../../store/useFeedStore";
import PostCard from "../../components/PostCard/PostCard";
import { PostCardSkeleton } from "../../components/PostCard/PostCardSkeleton";

const SavedScreen: React.FC = () => {
  const { posts, saved } = useFeedStore();

  const isLoading = posts.length === 0;

  const savedPosts = posts.filter((post) => saved[post.id]);

  if (isLoading) {
    return (
      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <PostCardSkeleton />}
        contentContainerStyle={{ padding: 16 }}
      />
    );
  }

  if (savedPosts.length === 0) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>No saved posts yet.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={savedPosts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PostCard post={item} />}
      contentContainerStyle={{ padding: 16 }}
      accessibilityLabel="List of saved posts"
    />
  );
};

export default SavedScreen;
