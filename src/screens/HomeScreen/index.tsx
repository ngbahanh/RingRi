import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animation from '../../components/Animation';
import Screen from '../../themes/layouts/Screen';

const HomeScreen = () => {
  return (
    <Screen>
      <View style={{ flex: 1 }}>
        <Animation.Lottie source="loadingProvider" />
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
