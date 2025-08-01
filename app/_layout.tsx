import React, { useEffect } from 'react';
import { Tabs } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView as SafeAreaViewContext } from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  useEffect(() => {
    const hideSplashScreen = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        await SplashScreen.hideAsync();
      } catch (error) {
        console.warn('Error hiding splash screen:', error);
      }
    };

    hideSplashScreen();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
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
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
} 