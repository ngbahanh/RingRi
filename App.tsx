import Animation from '@components/Animation';
import i18n from '@configs/i18n/i18next';
import { NS } from '@configs/i18n/types';
import RootNavigation from '@navigation/rootNavigation';
import { persistor, store } from '@redux/store';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App(): JSX.Element {
  return (
    <I18nextProvider i18n={i18n} defaultNS={NS.TRANSLATION}>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate
            loading={<Animation.Lottie source={'loadingProvider'} />}
            persistor={persistor}>
            <RootNavigation />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </I18nextProvider>
  );
}

export default App;
