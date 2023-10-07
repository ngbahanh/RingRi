import { PersistNavigationConfig } from '@configs/config.base';
import Config from '@configs/index';
import { NavigationContainerProps } from '@react-navigation/native';
import { useRef, useState } from 'react';
import { useIsMounted } from './useIsMouted';

const navigationRestoredDefaultState = (
  persistNavigation: PersistNavigationConfig,
) => {
  if (persistNavigation === 'always') return false;
  if (persistNavigation === 'dev' && __DEV__) return false;
  if (persistNavigation === 'prod' && !__DEV__) return false;

  return true;
};

const useNavigationPersistence = () => {
  const [initialNavigationState, setInitialNavigationState] =
    useState<NavigationContainerProps['initialState']>();
  const isMounted = useIsMounted();

  const initNavState = navigationRestoredDefaultState(Config.persistNavigation);
  const [isRestored, setIsRestored] = useState(initNavState);

  const routeNameRef = useRef();
};

export { navigationRestoredDefaultState, useNavigationPersistence };
