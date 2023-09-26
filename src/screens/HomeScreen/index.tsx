import React from 'react';
import { StyleSheet } from 'react-native';
import Animation from '../../components/Animation';
import Screen from '../../themes/layouts/Screen';

const HomeScreen = () => {
  return (
    <Screen>
      <Animation.Lottie source="loadingProvider" />
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
