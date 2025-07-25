export interface Post {
  createdAt: string;
  name: string;
  avatar: string;
  description: string;
  likes: number;
  image: string;
  comments: number;
  liked: boolean;
  saved: boolean;
  location: string;
  id: string;
}

export interface Comment {
  id: string;
  postId: string;
  user: string;
  avatar: string;
  text: string;
  createdAt: string;
} 