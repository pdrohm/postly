export const usePostCardActions = ({
  isLiked,
  isSaved,
  likeCount,
  commentCount,
  onLikePress,
  onCommentPress,
  onSavePress,
}: {
  isLiked: boolean;
  isSaved: boolean;
  likeCount: number;
  commentCount: number;
  onLikePress: () => void;
  onCommentPress: () => void;
  onSavePress: () => void;
}) => {
  return {
    isLiked,
    isSaved,
    likeCount,
    commentCount,
    onLikePress,
    onCommentPress,
    onSavePress,
  };
}; 