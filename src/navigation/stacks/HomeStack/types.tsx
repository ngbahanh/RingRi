import { ROUTER } from '@navigation/router';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type HomeStackParamList = {
  Home: undefined;
};

type HomeScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  ROUTER.homeScreen
>;

export type { HomeScreenProps, HomeStackParamList };
