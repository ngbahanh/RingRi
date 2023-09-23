import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../../../screens/HomeScreen';
import { STACKS } from '../../enums';
import { ROUTER } from '../../router';
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
