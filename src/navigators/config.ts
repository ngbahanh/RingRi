import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { TABS } from './enums';
import { TabParamsList } from './types';

const bottomTabItemOption = (
  routeName: keyof TabParamsList,
): BottomTabNavigationOptions | undefined => {
  const { t } = useTranslation();
  switch (routeName) {
    case TABS.HOME_TAB:
      return {
        tabBarLabel: t('tabs.homeTab'),
      };
    case TABS.PROFILE_TAB:
      return {
        tabBarLabel: t('tabs.profileTab'),
      };
  }
};

const bottomTabDefaultOptions = (props: {
  route: RouteProp<TabParamsList, keyof TabParamsList>;
  navigation: any;
}): BottomTabNavigationOptions => {
  return {
    headerShown: false,
    ...bottomTabItemOption(props.route.name),
  };
};

const stackDefaultOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const nonBottomTabOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export {
  bottomTabDefaultOptions,
  bottomTabItemOption,
  nonBottomTabOptions,
  stackDefaultOptions,
};
