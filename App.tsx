import Animation from '@components/Animation';
import i18n from '@configs/i18n/i18next';
import { NS } from '@configs/i18n/types';
import Config from '@configs/index';
import AppNavigators from '@navigators/AppNavigators';
import { persistor, store } from '@redux/store';
import { ErrorBoundary } from '@screens/ErrorScreen/ErrorBoundary';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

interface AppProps {
  hideSplashScreen?: () => Promise<void>;
}

function App(props: AppProps): JSX.Element {
  const { hideSplashScreen } = props;
  return (
    <I18nextProvider i18n={i18n} defaultNS={NS.TRANSLATION}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ErrorBoundary catchErrors={Config.catchErrors}>
          <Provider store={store}>
            <PersistGate
              loading={<Animation.Lottie source={'loadingProvider'} />}
              persistor={persistor}>
              <AppNavigators />
            </PersistGate>
          </Provider>
        </ErrorBoundary>
      </SafeAreaProvider>
    </I18nextProvider>
  );
}

export default App;
