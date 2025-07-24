import axios from 'axios';
import type { Post } from '../types/post';

const api = axios.create({
  baseURL: 'https://662029f13bf790e070af2cd8.mockapi.io/api/v1',
});

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await api.get<Post[]>('/posts');
  return response.data;
}; 