# Postly

Postly is a modern social app built with Expo, React Native, and TypeScript. It features a clean UI, profile management, post feed, saved posts, and settings, all powered by a modular architecture and best practices for state management, accessibility, and code quality.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Routing (Expo Router)](#routing-expo-router)
- [State Management](#state-management)
- [API Layer](#api-layer)
- [UI & Accessibility](#ui--accessibility)
- [Testing](#testing)
- [Getting Started](#getting-started)
- [Contribution & Code Quality](#contribution--code-quality)

---

## Features

- Home feed with posts, likes, comments, and skeleton loaders
- Profile drawer with user info and settings
- Saved posts screen
- Modular, accessible UI components
- Global state management with Zustand
- TypeScript strict typing throughout

---

## Tech Stack

- **React Native** (v19.0.0)
- **Expo** (v53)
- **Expo Router** for navigation
- **TypeScript** for type safety
- **Zustand** for global state management
- **React Query** for async data fetching/caching
- **Axios** for API requests
- **@gorhom/bottom-sheet** for modals
- **React Native Gesture Handler** and **Reanimated** for smooth UI
- **Jest** and **React Testing Library** (recommended for tests)

---

## Project Structure

```
app/
  _layout.tsx           # Main tab navigation (Home, Saved, Profile)
  index.tsx             # Home route
  saved.tsx             # Saved posts route
  settings.tsx          # App settings route
  profile/
    _layout.tsx         # Profile drawer (Profile, Settings)
    index.tsx           # Profile main screen
    settings.tsx        # Profile settings screen

src/
  api/                  # API abstraction (e.g., postsApi.ts)
  components/           # Reusable UI components
  screens/              # Screen containers (Home, Profile, Saved)
  store/                # Global state (Zustand)
  types/                # TypeScript types/interfaces
```

---

## Routing (Expo Router)

Postly uses **Expo Router** for file-based navigation:

- `/` (Home): Main feed, shows posts with like/comment/save features.
- `/saved`: Shows all posts the user has saved.
- `/profile`: Opens a right-side drawer with:
  - `/profile/index`: User profile screen.
  - `/profile/settings`: Profile-specific settings.
- `/settings`: (Planned) App-wide settings.

**Navigation Structure:**

- The root uses a tab navigator: Home, Saved, Profile.
- The Profile tab opens a drawer with Profile and Settings.
- Custom drawer content displays user info and a sign-out button.

---

## State Management

- **Zustand** is used for global state (see `src/store/useFeedStore.ts`).
- Stores posts, likes, saved status, comments, and provides actions for toggling like/save and adding comments.
- All state is strongly typed.

---

## API Layer

- All API calls are abstracted in `src/api/postsApi.ts`.
- Uses **Axios** for HTTP requests.
- Example: `fetchPosts()` fetches posts from a mock API.
- Types are defined in `src/types/post.ts` for strong typing and decoupling.

---

## UI & Accessibility

- All components are functional and use React Hooks.
- Accessibility best practices are followed (labels, roles, etc.).
- Skeleton loaders are shown while data is loading.
- All touchable elements have accessibility labels.
- Styles are modularized per component.



## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the app:**
   ```sh
   npm start
   ```
   Or use:
   - `npm run android`
   - `npm run ios`
   - `npm run web`

3. **Project requirements:**
   - Node.js (LTS recommended)
   - Expo CLI (`npm install -g expo-cli`)

---

## Contribution & Code Quality

- All code must follow strict TypeScript typing (no `any`).
- Use camelCase for variables/functions, PascalCase for components/types.
- No direct coupling to SDKs/libraries in hooks/components—use interfaces and dependency injection.
- Follow the Single Responsibility Principle.
- All async logic must handle loading, success, and error states.
- All code must be manually reviewed before merging.
- Commit in small, logical chunks.

---

## Credits

- Built with ❤️ using Expo and React Native.
