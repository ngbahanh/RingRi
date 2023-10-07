import Config from '@configs/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPasswordScreen from '@screens/ForgotPasswordScreen/ForgotPasswordScreen';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import LoginScreen from '@screens/LoginScreen/LoginScreen';
import SignUpScreen from '@screens/SignUpScreen/SignUpScreen';
import { useColorScheme } from 'react-native';
import {
  bottomTabDefaultOptions,
  nonBottomTabOptions,
  stackDefaultOptions,
} from './config';
import { TABS } from './enums';
import { ROUTER } from './router';
import { HomeStack, ProfileStack } from './stacks';
import { TabParamsList } from './types';

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

const Tab = createBottomTabNavigator<TabParamsList>();
const Stack = createNativeStackNavigator();

export const navigationRef = createNavigationContainerRef();

const exitRoutes = Config.exitRoutes;

const AppNavigators = (props: NavigationProps) => {
  const colorScheme = useColorScheme();

  const onStateChange = async () => {};

  const Tabs = () => (
    <Tab.Navigator
      initialRouteName={TABS.HOME_TAB}
      screenOptions={props => bottomTabDefaultOptions(props)}>
      <Tab.Screen name={TABS.HOME_TAB} component={HomeStack} />
      <Tab.Screen name={TABS.PROFILE_TAB} component={ProfileStack} />
    </Tab.Navigator>
  );

  const NonBottomTab = (
    <>
      <Stack.Screen name={ROUTER.homeScreen} component={HomeScreen} />
    </>
  );

  const AppStack = () => {
    //TODO: update flow authentication
    const authenticationStore = {
      isAuthenticated: true,
    };

    const initRouteName = authenticationStore.isAuthenticated
      ? ROUTER.welcomeScreen
      : ROUTER.loginScreen;

    return (
      <Stack.Navigator
        screenOptions={stackDefaultOptions}
        initialRouteName={initRouteName}>
        {authenticationStore.isAuthenticated ? (
          <Stack.Screen name={TABS.BOTTOM_TABS} component={Tabs} />
        ) : (
          <Stack.Group screenOptions={nonBottomTabOptions}>
            <Stack.Screen name={ROUTER.loginScreen} component={LoginScreen} />
            <Stack.Screen name={ROUTER.SignUpScreen} component={SignUpScreen} />
            <Stack.Screen
              name={ROUTER.ForgotPassword}
              component={ForgotPasswordScreen}
            />
          </Stack.Group>
        )}

        <Stack.Group screenOptions={nonBottomTabOptions}>
          {NonBottomTab}
        </Stack.Group>
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={onStateChange}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      {...props}>
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNavigators;
