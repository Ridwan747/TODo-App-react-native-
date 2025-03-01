import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import App from '../App'
import MainScreen from '../src/MainScreen'
import Registration from '../src/Authentication/Registration'
import Login from '../src/Authentication/Login';
import Dashboard from '../src/DashboardContainer/Dashboard'
import { NavigationContainer } from '@react-navigation/native';
import Time from '../src/DashboardContainer/Time'



import { useColorScheme } from '@/hooks/useColorScheme';
import { AppState } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
   <App/>
  );
}
