import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Amplify from '@aws-amplify/core';
import { awsMobile as config } from './aws.expoerts';
import { AuthLoadingScreen } from './navigation/Navigation';

Amplify.configure(config);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthLoadingScreen colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
