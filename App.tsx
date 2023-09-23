import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigation from './src/navigation/rootNavigation';
import { persistor, store } from './src/redux/store';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate
          loading={<View style={{ flex: 1, backgroundColor: 'blue' }}></View>}
          persistor={persistor}>
          <RootNavigation />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
