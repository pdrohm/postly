import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import ProfileSettingsDrawer from '../../components/ProfileSettingsDrawer/ProfileSettingsDrawer';
import { styles } from './styles/ProfileScreen.styles';

const ProfileScreen: React.FC = () => {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
      </View>
      <View style={styles.profileInfo}>
        <View style={styles.avatar} />
        <Text style={styles.userName}>User Name</Text>
        <Text style={styles.userHandle}>@username</Text>
      </View>
      <View style={styles.content}>
        <Text>Posts and content will appear here.</Text>
      </View>
      
    </View>
  );
};

export default ProfileScreen;