import React from 'react';
import { View } from 'react-native';
import { postCardStyles } from './styles/PostCard.styles';

export const PostCardSkeleton: React.FC = () => {
  return (
    <View style={postCardStyles.container}>
      <View style={postCardStyles.header}>
        <View style={[postCardStyles.avatar, { backgroundColor: '#e0e0e0' }]} />
        <View style={{ width: 100, height: 16, backgroundColor: '#e0e0e0', borderRadius: 8 }} />
      </View>
      <View style={[postCardStyles.image, { backgroundColor: '#e0e0e0' }]} />
      <View style={postCardStyles.actions}>
        {[...Array(4)].map((_, i) => (
          <View key={i} style={{ width: 40, height: 16, backgroundColor: '#e0e0e0', borderRadius: 8 }} />
        ))}
      </View>
      <View style={postCardStyles.footer}>
        <View style={{ width: 80, height: 14, backgroundColor: '#e0e0e0', borderRadius: 7, marginBottom: 4 }} />
        <View style={{ width: '80%', height: 14, backgroundColor: '#e0e0e0', borderRadius: 7, marginBottom: 4 }} />
        <View style={{ width: 60, height: 12, backgroundColor: '#e0e0e0', borderRadius: 6 }} />
      </View>
    </View>
  );
}; 