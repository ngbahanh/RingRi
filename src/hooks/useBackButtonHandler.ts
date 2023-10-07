import { navigationRef } from '@navigators/AppNavigators';
import { NavigationState, getActionFromState } from '@react-navigation/native';
import { isIOS } from '@utils/Platform';
import { useEffect, useRef } from 'react';
import { BackHandler } from 'react-native';

const getActiveRouteName = (
  state: ReturnType<typeof navigationRef.getRootState>,
) => {
  const route = state.routes[state.index];
  if (!route.state) return route.name;

  return getActiveRouteName(route.state as NavigationState);
};

const useBackButtonHandler = (canExit: (routeName: string) => boolean) => {
  if (isIOS) return;

  const canExitRef = useRef(canExit);

  useEffect(() => {
    canExitRef.current = canExit;
  }, [canExit]);

  useEffect(() => {
    const onBackPress = () => {
      if (!navigationRef.isReady()) {
        return false;
      }

      const routeName = getActionFromState(navigationRef.getRootState());

      if (canExitRef.current(routeName)) {
        BackHandler.exitApp();
        return true;
      }

      if (navigationRef.canGoBack()) {
        navigationRef.goBack();
        return true;
      }

      return false;
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, []);
};

export { useBackButtonHandler };
