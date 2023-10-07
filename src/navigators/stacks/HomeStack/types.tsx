import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ROUTER } from 'src/navigators/router';

type HomeStackParamList = {
  Home: undefined;
};

type HomeScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  ROUTER.homeScreen
>;

export type { HomeScreenProps, HomeStackParamList };
