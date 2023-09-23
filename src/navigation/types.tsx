import { NavigatorScreenParams } from '@react-navigation/native';
import { HomeStackParamList } from './stacks/HomeStack/types';
import { ProfileStackParamList } from './stacks/ProfileStack/types';

type TabParamsList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  ProfileTab: NavigatorScreenParams<ProfileStackParamList>;
};

export type { TabParamsList };
