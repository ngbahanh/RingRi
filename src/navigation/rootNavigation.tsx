import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { TABS } from './enums';
import { HomeStack, ProfileStack } from './stacks';
import { TabParamsList } from './types';

const Tab = createBottomTabNavigator<TabParamsList>();

const trackScreenView = async (routeName: string, routeParams: any) => {
  console.log(`🚀 ${routeName}`);
  if (routeParams) {
    console.log('params: ', routeParams);
  }
};

const RootNavigation = () => {
  const navigationRef = useNavigationContainerRef();

  const defaultOptions: BottomTabNavigationOptions = {
    headerShown: false,
  };

  const onStateChange = async () => {};

  return (
    <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
      <Tab.Navigator
        initialRouteName={TABS.HOME_TAB}
        screenOptions={defaultOptions}>
        <Tab.Screen name={TABS.HOME_TAB} component={HomeStack} />
        <Tab.Screen name={TABS.PROFILE_TAB} component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
