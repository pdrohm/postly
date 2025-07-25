import { Animated } from 'react-native';

export interface ProfileSettingsDrawerProps {
  visible: boolean;
  slideAnim: Animated.Value;
  onClose: () => void;
  notificationsEnabled: boolean;
  onToggleNotifications: (value: boolean) => void;
  darkMode: boolean;
  onToggleDarkMode: (value: boolean) => void;
  onLogout: () => void;
} 