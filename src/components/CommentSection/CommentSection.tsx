import React, { useEffect, useMemo, useRef } from 'react';
import { View, Text, TextInput, Pressable, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import moment from 'moment';
import { useCommentSection } from './hooks/useCommentSection';
import { commentSectionStyles } from './styles/CommentSection.styles';
import type { Comment } from '../../types/post';

interface CommentSectionProps {
  visible: boolean;
  onClose: () => void;
  postId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ visible, onClose, postId }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['60%', '90%'], []);
  const { input, setInput, submitting, comments, handleAddComment } = useCommentSection(postId);

  console.log("visible", visible);

  const renderItem = ({ item }: { item: Comment }) => (
    <View style={commentSectionStyles.commentItem}>
      <View style={commentSectionStyles.avatar}>
        <Text accessibilityLabel={`${item.user} avatar`} style={{ fontSize: 18, textAlign: 'center', lineHeight: 36 }}>
          {item.avatar ? ' ' : '👤'}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold' }}>{item.user}</Text>
        <Text style={commentSectionStyles.commentText}>{item.text}</Text>
        <Text style={commentSectionStyles.commentMeta}>{moment(item.createdAt).fromNow()}</Text>
      </View>
    </View>
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={visible ? 0 : -1}
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={onClose}
      handleIndicatorStyle={{ backgroundColor: '#ccc' }}
      backgroundStyle={{ backgroundColor: '#fff' }}
      accessibilityLabel="Comments bottom sheet"
      enableDynamicSizing={false}
    >
<KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : undefined}
  style={{ flex: 1 }}
  keyboardVerticalOffset={80}
>
  <View style={{ flex: 1 }}>
    <FlatList
      data={comments}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 16, paddingBottom: 96 }}
      ListEmptyComponent={<Text style={commentSectionStyles.emptyText}>No comments yet.</Text>}
      style={{ flexGrow: 0, maxHeight: '75%' }}
    />
    <View style={commentSectionStyles.inputRow} pointerEvents="box-none">
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
        style={({ pressed }) => [commentSectionStyles.sendButton, { opacity: pressed || submitting || !input.trim() ? 0.5 : 1 }]}
      >
        <Text style={commentSectionStyles.sendButtonText}>Send</Text>
      </Pressable>
    </View>
  </View>
</KeyboardAvoidingView>

    </BottomSheet>
  );
};

export default CommentSection; 