import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import ProfileSettingsDrawer from '../../components/ProfileSettingsDrawer/ProfileSettingsDrawer';

const ProfileScreen: React.FC = () => {


  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 24 }}>
        
      </View>
      <View style={{ alignItems: 'center', marginTop: 24 }}>
        <View style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: '#eee', marginBottom: 12 }} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>User Name</Text>
        <Text style={{ color: '#888', marginBottom: 16 }}>@username</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Posts and content will appear here.</Text>
      </View>
      
    </View>
  );
};

export default ProfileScreen;