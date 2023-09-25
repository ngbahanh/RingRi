import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animation from '../../components/Animation';
import Screen from '../../themes/layouts/Screen';

const ProfileScreen = () => {
  return (
    <Screen>
      <Screen>
          <Animation.Lottie source="loading" />
      </Screen>
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
