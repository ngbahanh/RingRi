import { useAutoPreset } from '@hooks/useAutoPreset';
import { useScrollToTop } from '@react-navigation/native';
import { isIOS } from '@utils/Platform';
import React, { ReactNode, useRef } from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  SafeAreaView,
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
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ExtendedEdge {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

interface BaseScreenProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  safeArea?: boolean;
  safeAreaEdges?: ExtendedEdge;
  backgroundColor?: string;
  statusBarStyle?: StatusBarStyle;
  keyboardOffset?: number;
  StatusBarProps?: StatusBarProps;
  KeyboardAvoidingViewProps?: KeyboardAvoidingViewProps;
}

interface SafeAreaProps extends BaseScreenProps {
  isSafeArea?: boolean;
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

  const ref = useRef<ScrollView>(null);

  const { scrollEnabled, onContentSizeChange, onLayout } = useAutoPreset(
    props as AutoScreenProps,
  );

  useScrollToTop(ref);

  return (
    <ScrollView
      {...{ ref, scrollEnabled, keyboardShouldPersistTaps }}
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

const SafeAreaScreen = (props: SafeAreaProps) => {
  const { children } = props;

  return <SafeAreaView>{children}</SafeAreaView>;
};

const SaveAreaViewWrapper = (props: SafeAreaProps) => {
  const { isSafeArea, safeAreaEdges, children } = props;

  const insets = useSafeAreaInsets();

  if (safeAreaEdges) {
    const insetsStyle = {
      marginTop: safeAreaEdges.top || insets.top,
      marginBottom: safeAreaEdges.bottom || insets.bottom,
      marginLeft: safeAreaEdges.left || insets.left,
      marginRight: safeAreaEdges.right || insets.right,
    };

    return <View style={insetsStyle}>{children}</View>;
  }

  if (isSafeArea) {
    return <SafeAreaScreen {...props}>{children}</SafeAreaScreen>;
  }

  return children;
};

const Screen = (props: ScreenProps) => {
  const {
    backgroundColor = 'white',
    KeyboardAvoidingViewProps,
    keyboardOffset = 0,
    safeArea,
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
        <SaveAreaViewWrapper isSafeArea={safeArea} {...props}>
          {isNonScrolling(props.preset) ? (
            <ScreenWithoutScrolling {...props} />
          ) : (
            <ScreenWithScrolling {...props} />
          )}
        </SaveAreaViewWrapper>
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
