import Animation from '@components/Animation';
import Screen from '@themes/layouts/Screen';
import React from 'react';
import { StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <Screen>
      <Animation.Lottie source="loading" />
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
