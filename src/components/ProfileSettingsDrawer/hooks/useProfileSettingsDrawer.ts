import { useState, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const useProfileSettingsDrawer = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const slideAnim = useRef(new Animated.Value(SCREEN_WIDTH)).current;

  const openDrawer = () => {
    setDrawerVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(slideAnim, {
      toValue: SCREEN_WIDTH,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setDrawerVisible(false));
  };

  const onToggleNotifications = (value: boolean) => setNotificationsEnabled(value);
  const onToggleDarkMode = (value: boolean) => setDarkMode(value);
  const onLogout = () => {
    // TODO: Implement logout logic
  };

  return {
    drawerVisible,
    openDrawer,
    closeDrawer,
    notificationsEnabled,
    onToggleNotifications,
    darkMode,
    onToggleDarkMode,
    slideAnim,
    onLogout,
  };
}; 