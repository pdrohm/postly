import { useFeedStore } from "../../../store/useFeedStore";

export function useSavedScreen() {
    const { posts, saved } = useFeedStore();

    const isLoading = posts.length === 0;
  
    const savedPosts = posts.filter((post) => saved[post.id]);

    return { savedPosts, isLoading };
}