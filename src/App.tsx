import { registerRootComponent }  from 'expo';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Amplify from '@aws-amplify/core';
import awsMobileConfig from './aws-exports';
import { AuthLoadingScreen } from './navigation/Navigation';

import { DataStore } from 'aws-amplify';
import { ExpoSQLiteAdapter } from '@aws-amplify/datastore-storage-adapter/ExpoSQLiteAdapter';

import { store } from './store';
import { Provider } from 'react-redux';

DataStore.configure({
  storageAdapter: ExpoSQLiteAdapter
});

Amplify.configure(awsMobileConfig);

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  let result;

  if (!isLoadingComplete) {
    result = null;
  } else {
    result = <SafeAreaProvider>
      <AuthLoadingScreen colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  }

  return (

    <Provider store={store}>
    <>{ result }</>
    </Provider>
  );
}

registerRootComponent(App);

export default App;
