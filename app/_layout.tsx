import React from 'react';
import { Tabs } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaView, StatusBar } from 'react-native';
import { FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView as SafeAreaViewContext } from 'react-native-safe-area-context';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaViewContext style={{ flex: 1 }}>
          <StatusBar barStyle="dark-content" />
          <Tabs
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                if (route.name === 'index') {
                  return <FontAwesome name="home" size={size} color={color} />;
                }
                if (route.name === 'saved') {
                  return <MaterialIcons name="bookmark-outline" size={size} color={color} />;
                }
                if (route.name === 'profile') {
                  return <FontAwesome name="user" size={size} color={color} />;
                }
                return null;
              },
              tabBarActiveTintColor: '#2980b9',
              tabBarInactiveTintColor: '#888',
              tabBarStyle: {
                backgroundColor: '#fff',
                height: 60,
                paddingBottom: 10,
                paddingTop: 10,
                borderTopWidth: 1,
                borderTopColor: '#ccc',
              },
            })}
          >
            <Tabs.Screen name="index" options={{ headerShown: false, tabBarLabel: '' }} />
            <Tabs.Screen name="saved" options={{ headerShown: false, tabBarLabel: '' }} />
            <Tabs.Screen name="profile" options={{ headerShown: false, tabBarLabel: '' }} />
          </Tabs>
        </SafeAreaViewContext>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
} 