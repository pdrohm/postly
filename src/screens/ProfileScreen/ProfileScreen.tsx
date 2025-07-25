import React from 'react';
import { View, Text, TouchableOpacity, Modal, Switch, Button, Animated, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;

const ProfileScreen: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = React.useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const slideAnim = React.useRef(new Animated.Value(SCREEN_WIDTH)).current;

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

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 24 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Profile</Text>
        <TouchableOpacity onPress={openDrawer} accessibilityLabel="Open settings">
          <Feather name="settings" size={28} color="#222" />
        </TouchableOpacity>
      </View>
      {/* User Info (placeholder) */}
      <View style={{ alignItems: 'center', marginTop: 24 }}>
        <View style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: '#eee', marginBottom: 12 }} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>User Name</Text>
        <Text style={{ color: '#888', marginBottom: 16 }}>@username</Text>
      </View>
      {/* Posts/Content placeholder */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Posts and content will appear here.</Text>
      </View>
      {/* Settings Drawer */}
      <Modal
        visible={drawerVisible}
        animationType="none"
        transparent
        onRequestClose={closeDrawer}
      >
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)' }}
          activeOpacity={1}
          onPress={closeDrawer}
        >
          <Animated.View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: SCREEN_WIDTH * 0.8,
              height: '100%',
              backgroundColor: '#fff',
              padding: 24,
              shadowColor: '#000',
              shadowOpacity: 0.2,
              shadowRadius: 8,
              shadowOffset: { width: -2, height: 0 },
              transform: [{ translateX: slideAnim }],
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>Settings</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 24 }}>
              <Text style={{ flex: 1, fontSize: 16 }}>Enable Notifications</Text>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                accessibilityLabel="Enable notifications"
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 24 }}>
              <Text style={{ flex: 1, fontSize: 16 }}>Dark Mode</Text>
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                accessibilityLabel="Enable dark mode"
              />
            </View>
            <Button title="Logout" onPress={() => {}} accessibilityLabel="Logout" color="#e74c3c" />
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
} 

export default ProfileScreen;