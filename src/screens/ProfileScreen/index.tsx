import React from 'react';
import { StyleSheet } from 'react-native';
import Animation from '../../components/Animation';
import Screen from '../../themes/layouts/Screen';

const ProfileScreen = () => {
  return (
    <Screen>
      <Animation.Lottie source="loading" />
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
