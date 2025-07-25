// Avatar URLs
export const AVATAR_URLS = {
  PROFILE: 'https://i.pravatar.cc/304?u=profile',
  POST: (postId: string) => `https://i.pravatar.cc/304?u=${postId}`,
  USER: (userId: string) => `https://i.pravatar.cc/304?u=${userId}`,
} as const;

// Image URLs
export const IMAGE_URLS = {
  POST: (postId: string) => `https://picsum.photos/600/400?random=${postId}`,
  FALLBACK: 'https://placekitten.com/400/300',
} as const;

// App constants
export const APP_CONSTANTS = {
  DEFAULT_USER_NAME: 'User Name',
  DEFAULT_USER_HANDLE: '@username',
  DEFAULT_USER_EMAIL: 'john.doe@example.com',
} as const; 