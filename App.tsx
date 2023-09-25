import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Animation from './src/components/Animation';
import RootNavigation from './src/navigation/rootNavigation';
import { persistor, store } from './src/redux/store';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate
          loading={<Animation.Lottie source={'loadingProvider'} />}
          persistor={persistor}>
          <RootNavigation />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
