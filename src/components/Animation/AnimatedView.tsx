import LottieView, { LottieViewProps } from 'lottie-react-native';
import React, { memo, useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, ViewStyle } from 'react-native';
import { ANIMATIONS } from '../../assets/animations';

interface TAnimatedView extends LottieViewProps {
  source: keyof typeof ANIMATIONS;
  style?: ViewStyle;
}

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedView = (props: TAnimatedView) => {
  const { source, style } = props;

  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <AnimatedLottieView
      source={ANIMATIONS[source]}
      progress={animationProgress.current}
      style={style}
    />
  );
};

export default memo(AnimatedView);

const styles = StyleSheet.create({});
