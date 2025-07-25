import type { Post } from '../../../types/post';

export const usePostCardImage = ({
  imageUrl,
  fallbackImage,
  imageError,
  setImageError,
  postName,
  doubleTapGesture,
}: {
  imageUrl: string;
  fallbackImage: string;
  imageError: boolean;
  setImageError: (error: boolean) => void;
  postName: string;
  doubleTapGesture: any;
}) => {
  return {
    imageUrl,
    fallbackImage,
    imageError,
    setImageError,
    postName,
    doubleTapGesture,
  };
}; 