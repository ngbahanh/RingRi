import { ANIMATIONS } from '@assets/animations';
import LottieView, { LottieViewProps } from 'lottie-react-native';
import React, { memo } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

interface TAnimationView extends LottieViewProps {
  source: keyof typeof ANIMATIONS;
  style?: ViewStyle;
}

const Lottie = (props: TAnimationView) => {
  const { source, style } = props;

  const defaultConfig: LottieViewProps = {
    source: '',
    autoPlay: true,
    loop: true,
  };

  return (
    <LottieView
      {...defaultConfig}
      {...props}
      style={[styles.container, style]}
      source={ANIMATIONS[source]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default memo(Lottie);
