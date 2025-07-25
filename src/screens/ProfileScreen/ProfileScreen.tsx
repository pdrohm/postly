import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import ProfileSettingsDrawer from '../../components/ProfileSettingsDrawer/ProfileSettingsDrawer';
import { styles } from './styles/ProfileScreen.styles';
import { AVATAR_URLS, APP_CONSTANTS } from '../../constants';

const ProfileScreen: React.FC = () => {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
      </View>
      <View style={styles.profileInfo}>
        <Image
          source={{ uri: AVATAR_URLS.PROFILE }}
          style={styles.avatar}
        />
        <Text style={styles.userName}>{APP_CONSTANTS.DEFAULT_USER_NAME}</Text>
        <Text style={styles.userHandle}>{APP_CONSTANTS.DEFAULT_USER_HANDLE}</Text>
      </View>
      <View style={styles.content}>
        <Text>Posts and content will appear here.</Text>
      </View>
      
    </View>
  );
};

export default ProfileScreen;