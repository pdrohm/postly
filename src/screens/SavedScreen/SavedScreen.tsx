import React from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";
import { useFeedStore } from "../../store/useFeedStore";
import PostCard from "../../components/PostCard/PostCard";
import { PostCardSkeleton } from "../../components/PostCard/PostCardSkeleton";
import { styles } from './styles/SavedScreen.styles';
import { useSavedScreen } from "./hooks/useSavedScreen";

const SavedScreen: React.FC = () => {
  const { savedPosts, isLoading } = useSavedScreen();

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text
        style={styles.header}
        accessibilityRole="header"
        accessibilityLabel={isLoading ? "Loading saved posts" : `Saved posts: ${savedPosts.length}`}
      >
        {isLoading ? "Loading..." : `Saved Posts (${savedPosts.length})`}
      </Text>
    </View>
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1 }}>
        {renderHeader()}
        <FlatList
          data={[1, 2, 3, 4, 5]}
          keyExtractor={(item) => String(item)}
          renderItem={() => <PostCardSkeleton />}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    );
  }

  if (savedPosts.length === 0) {
    return (
      <View style={{ flex: 1 }}>
        {renderHeader()}
        <View style={styles.emptyContainer}>
          <Text>No saved posts yet.</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {renderHeader()}
      <FlatList
        data={savedPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        contentContainerStyle={styles.contentContainer}
        accessibilityLabel="List of saved posts"
      />
    </View>
  );
};

export default SavedScreen;
