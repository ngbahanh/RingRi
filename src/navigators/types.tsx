import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from './stacks/HomeStack/types';
import { ProfileStackParamList } from './stacks/ProfileStack/types';

type TabParamsList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  ProfileTab: NavigatorScreenParams<ProfileStackParamList>;
};

type AppStackScreenProps<T extends keyof TabParamsList> =
  NativeStackScreenProps<TabParamsList, T>;

export type { AppStackScreenProps, TabParamsList };
