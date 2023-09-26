import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import TestScreen from '../screens/TestScreen';
import { TABS } from './enums';
import { ROUTER } from './router';
import { HomeStack, ProfileStack } from './stacks';
import { TabParamsList } from './types';

const Tab = createBottomTabNavigator<TabParamsList>();
const Stack = createNativeStackNavigator();

const trackScreenView = async (routeName: string, routeParams: any) => {
  console.log(`🚀 ${routeName}`);
  if (routeParams) {
    console.log('params: ', routeParams);
  }
};

const RootNavigation = () => {
  const navigationRef = useNavigationContainerRef();

  const bottomTabDefaultOptions: BottomTabNavigationOptions = {
    headerShown: false,
  };

  const stackDefaultOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  const nonBottomTabOptions: NativeStackNavigationOptions = {};

  const onStateChange = async () => {};

  const Tabs = () => (
    <Tab.Navigator
      initialRouteName={TABS.HOME_TAB}
      screenOptions={bottomTabDefaultOptions}>
      <Tab.Screen name={TABS.HOME_TAB} component={HomeStack} />
      <Tab.Screen name={TABS.PROFILE_TAB} component={ProfileStack} />
    </Tab.Navigator>
  );

  const NonBottomTab = (
    <>
      <Stack.Screen name={ROUTER.testScreen} component={TestScreen} />
    </>
  );

  return (
    <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
      <Stack.Navigator screenOptions={stackDefaultOptions}>
        <Stack.Screen name={TABS.BOTTOM_TABS} component={Tabs} />
        <Stack.Group screenOptions={nonBottomTabOptions}>
          {NonBottomTab}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
