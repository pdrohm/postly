import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import ProfileSettingsDrawer from '../../components/ProfileSettingsDrawer/ProfileSettingsDrawer';
import { useProfileSettingsDrawer } from '../../components/ProfileSettingsDrawer/hooks/useProfileSettingsDrawer';

const ProfileScreen: React.FC = () => {
  const {
    drawerVisible,
    openDrawer,
    closeDrawer,
    notificationsEnabled,
    onToggleNotifications,
    darkMode,
    onToggleDarkMode,
    slideAnim,
    onLogout,
  } = useProfileSettingsDrawer();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 24 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Profile</Text>
        <TouchableOpacity onPress={openDrawer} accessibilityLabel="Open settings">
          <Feather name="settings" size={28} color="#222" />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', marginTop: 24 }}>
        <View style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: '#eee', marginBottom: 12 }} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>User Name</Text>
        <Text style={{ color: '#888', marginBottom: 16 }}>@username</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Posts and content will appear here.</Text>
      </View>
      <ProfileSettingsDrawer
        visible={drawerVisible}
        slideAnim={slideAnim}
        onClose={closeDrawer}
        notificationsEnabled={notificationsEnabled}
        onToggleNotifications={onToggleNotifications}
        darkMode={darkMode}
        onToggleDarkMode={onToggleDarkMode}
        onLogout={onLogout}
      />
    </View>
  );
};

export default ProfileScreen;