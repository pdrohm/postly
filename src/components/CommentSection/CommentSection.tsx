import React, { useEffect, useMemo, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  Modal,
  Dimensions,
  SafeAreaView,
  Image,
} from "react-native";
import moment from "moment";
import { useCommentSection } from "./hooks/useCommentSection";
import { commentSectionStyles } from "./styles/CommentSection.styles";
import type { Comment } from "../../types/post";

interface CommentSectionProps {
  visible: boolean;
  onClose: () => void;
  postId: string;
}

const { height: screenHeight } = Dimensions.get('window');

const CommentSection: React.FC<CommentSectionProps> = ({
  visible,
  onClose,
  postId,
}) => {
  const { input, setInput, submitting, comments, handleAddComment } =
    useCommentSection(postId);

  const renderItem = ({ item }: { item: Comment }) => (
    <View style={commentSectionStyles.commentItem}>
      <View style={commentSectionStyles.avatar}>
        <Image
          source={{ uri: item.avatar }}
          style={commentSectionStyles.avatar}
          accessibilityLabel={`${item.user} avatar`}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold" }}>{item.user}</Text>
        <Text style={commentSectionStyles.commentText}>{item.text}</Text>
        <Text style={commentSectionStyles.commentMeta}>
          {moment(item.createdAt).fromNow()}
        </Text>
      </View>
    </View>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView style={commentSectionStyles.modalContainer}>
        <View style={commentSectionStyles.header}>
          <Text style={commentSectionStyles.headerTitle}>Comments</Text>
          <Pressable onPress={onClose} style={commentSectionStyles.closeButton}>
            <Text style={commentSectionStyles.closeButtonText}>✕</Text>
          </Pressable>
        </View>
        
        <View style={commentSectionStyles.contentContainer}>
          <FlatList
            data={comments}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={commentSectionStyles.listContent}
            ListEmptyComponent={
              <Text style={commentSectionStyles.emptyText}>
                No comments yet.
              </Text>
            }
            showsVerticalScrollIndicator={false}
            style={commentSectionStyles.list}
          />
        </View>

        <View style={commentSectionStyles.inputRow}>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Add a comment..."
            style={commentSectionStyles.input}
            editable={!submitting}
            returnKeyType="send"
            onSubmitEditing={handleAddComment}
            blurOnSubmit={false}
            accessibilityLabel="Comment input"
          />
          <Pressable
            onPress={handleAddComment}
            disabled={submitting || !input.trim()}
            accessibilityLabel="Send comment"
            accessibilityRole="button"
            style={({ pressed }) => [
              commentSectionStyles.sendButton,
              { opacity: pressed || submitting || !input.trim() ? 0.5 : 1 },
            ]}
          >
            <Text style={commentSectionStyles.sendButtonText}>Send</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default CommentSection;
