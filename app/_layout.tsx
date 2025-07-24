import React from 'react';
import { Tabs } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaView, StatusBar } from 'react-native';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <Tabs>
          <Tabs.Screen name="index" options={{ title: 'Feed' }} />
          <Tabs.Screen name="saved" options={{ title: 'Saved' }} />
          <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
        </Tabs>
      </SafeAreaView>
    </QueryClientProvider>
  );
} 