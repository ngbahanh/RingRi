import { useAutoPreset } from '@hooks/useAutoPreset';
import { useScrollToTop } from '@react-navigation/native';
import { isIOS } from '@utils/Platform';
import React, { ReactNode, useRef } from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  ScrollView,
  ScrollViewProps,
  StatusBar,
  StatusBarProps,
  StatusBarStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

type PropsWithChildren<P = unknown> = P & { children?: ReactNode };

interface BaseScreenProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  safeAreaEdges?: ExtendedEdge[];
  backgroundColor?: string;
  statusBarStyle?: StatusBarStyle;
  keyboardOffset?: number;
  StatusBarProps?: StatusBarProps;
  KeyboardAvoidingViewProps?: KeyboardAvoidingViewProps;
}

interface FixedScreenProps extends BaseScreenProps {
  preset?: 'fixed';
}

interface ScrollScreenProps extends BaseScreenProps {
  preset?: 'scroll';
  keyboardShouldPersistTaps?: 'handled' | 'always' | 'never';
  ScrollViewProps?: ScrollViewProps;
}

export interface AutoScreenProps extends Omit<ScrollScreenProps, 'preset'> {
  preset?: 'auto';
  scrollEnabledToggleThreshold?: { percent?: number; point?: number };
}

export type ScreenProps =
  | ScrollScreenProps
  | FixedScreenProps
  | AutoScreenProps;

const isNonScrolling = (preset?: ScreenProps['preset']) => {
  return !preset || preset === 'fixed';
};

const ScreenWithoutScrolling = (props: ScreenProps) => {
  const { style, contentContainerStyle, children } = props;
  return (
    <View style={[style]}>
      <View style={[contentContainerStyle]}>{children}</View>
    </View>
  );
};

const ScreenWithScrolling = (props: ScreenProps) => {
  const {
    children,
    keyboardShouldPersistTaps = 'handled',
    contentContainerStyle,
    ScrollViewProps,
    style,
  } = props as ScrollScreenProps;

  const ref = useRef<ScrollView>();

  const { scrollEnabled, onContentSizeChange, onLayout } = useAutoPreset(
    props as AutoScreenProps,
  );

  // Add native behavior of pressing the active tab to scroll to the top of the content
  // More info at: https://reactnavigation.org/docs/use-scroll-to-top/
  useScrollToTop(ref);

  return (
    <ScrollView
      {...{ keyboardShouldPersistTaps, scrollEnabled, ref }}
      {...ScrollViewProps}
      onLayout={e => {
        onLayout(e);
        ScrollViewProps?.onLayout?.(e);
      }}
      onContentSizeChange={(w: number, h: number) => {
        onContentSizeChange(w, h);
        ScrollViewProps?.onContentSizeChange?.(w, h);
      }}
      style={[ScrollViewProps?.style, style]}
      contentContainerStyle={[
        ScrollViewProps?.contentContainerStyle,
        contentContainerStyle,
      ]}>
      {children}
    </ScrollView>
  );
};

const Screen = (props: ScreenProps) => {
  const {
    backgroundColor = 'white',
    KeyboardAvoidingViewProps,
    keyboardOffset = 0,
    safeAreaEdges,
    StatusBarProps,
    statusBarStyle = 'dark-content',
  } = props;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar barStyle={statusBarStyle} {...StatusBarProps} />
      <KeyboardAvoidingView
        behavior={isIOS ? 'padding' : undefined}
        keyboardVerticalOffset={keyboardOffset}
        {...KeyboardAvoidingViewProps}>
        {isNonScrolling(props.preset) ? (
          <ScreenWithoutScrolling {...props} />
        ) : (
          <ScreenWithScrolling {...props} />
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  view: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
