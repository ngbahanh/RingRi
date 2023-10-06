import { STACKS } from '@navigation/enums';
import { ROUTER } from '@navigation/router';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';
import React from 'react';
import { HomeStackParamList } from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const defaultOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      key={STACKS.HOME_STACK}
      initialRouteName={ROUTER.homeScreen}
      screenOptions={defaultOptions}>
      <Stack.Screen name={ROUTER.homeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
