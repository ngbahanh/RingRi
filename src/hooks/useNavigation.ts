import { navigationRef } from '@navigators/AppNavigators';

const useNavigation = () => {
  const navigate = (...args: Parameters<typeof navigationRef.navigate>) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(...args);
    }
  };

  const goBack = () => {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
      navigationRef.goBack();
    }
  };

  const resetRoot = (
    state: Parameters<typeof navigationRef.resetRoot>[0] = {
      index: 0,
      routes: [],
    },
  ) => {
    if (navigationRef.isReady()) {
      navigationRef.resetRoot(state);
    }
  };

  return {
    navigate,
    goBack,
    resetRoot,
  };
};

export { useNavigation };
