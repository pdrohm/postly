import React from 'react';
import { View, Text, TouchableOpacity, Modal, Switch, Button, Animated, Dimensions, SafeAreaView } from 'react-native';
import type { ProfileSettingsDrawerProps } from './ProfileSettingsDrawer.types';
import styles from './styles/ProfileSettingsDrawer.styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

const ProfileSettingsDrawer: React.FC<ProfileSettingsDrawerProps> = ({
  visible,
  slideAnim,
  onClose,
  notificationsEnabled,
  onToggleNotifications,
  darkMode,
  onToggleDarkMode,
  onLogout,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="none"
      transparent
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
        accessibilityLabel="Close settings drawer"
      >
        <Animated.View
          style={[
            styles.drawer,
            { width: SCREEN_WIDTH * 0.8, transform: [{ translateX: slideAnim }] },
          ]}
        >
          <Text style={styles.title}>Settings</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Enable Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={onToggleNotifications}
              accessibilityLabel="Enable notifications"
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Dark Mode</Text>
            <Switch
              value={darkMode}
              onValueChange={onToggleDarkMode}
              accessibilityLabel="Enable dark mode"
            />
          </View>
          <Button title="Logout" onPress={onLogout} accessibilityLabel="Logout" color="#e74c3c" />
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ProfileSettingsDrawer; 