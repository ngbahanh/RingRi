import React, { ReactNode } from 'react';
import { Pressable, PressableProps, StyleSheet, View } from 'react-native';

type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  onPress?: () => void;
  loading?: boolean;
} & PressableProps;

const Icon = (props: PropsWithChildren) => {
  const { children, onPress, loading } = props;

  const isDisabled = props.disabled || loading;

  return (
    <Pressable
      {...props}
      onPress={onPress}
      disabled={isDisabled}
      style={styles.containerStyle}>
      <View style={styles.icon}>{children}</View>
    </Pressable>
  );
};

export default Icon;

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    overflow: 'hidden',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
  },
});
