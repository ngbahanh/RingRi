import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import ProfileScreen from '@screens/ProfileScreen/ProfileScreen';
import React from 'react';
import { STACKS } from 'src/navigators/enums';
import { ROUTER } from 'src/navigators/router';
import { ProfileStackParamList } from './types';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const defaultOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const ProfileStack = () => {
  return (
    <Stack.Navigator
      key={STACKS.PROFILE_STACK}
      initialRouteName={ROUTER.profileScreen}
      screenOptions={defaultOptions}>
      <Stack.Screen name={ROUTER.profileScreen} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;