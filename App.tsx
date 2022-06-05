import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Amplify from '@aws-amplify/core';
import { awsMobile as config } from './aws.expoerts';
import { AuthLoadingScreen } from './navigation/Navigation';

import { DataStore } from 'aws-amplify';
import ExpoSQLiteAdapter
  from '@aws-amplify/datastore-storage-adapter/lib/ExpoSQLiteAdapter/ExpoSQLiteAdapter';
// import ExpoSQLiteAdapter
//   from '@aws-amplify/datastore-storage-adapter/lib-esm/ExpoSQLiteAdapter/ExpoSQLiteAdapter';
// import { ExpoSQLiteAdapter } from '@aws-amplify/datastore-storage-adapter/ExpoSQLiteAdapter';

DataStore.configure({
  storageAdapter: ExpoSQLiteAdapter
});

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
