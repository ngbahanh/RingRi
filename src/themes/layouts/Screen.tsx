import React, { ReactNode } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

type PropsWithChildren<P = unknown> = P & { children?: ReactNode };

const Screen = (props: PropsWithChildren) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundColor = isDarkMode ? '#1B262C' : 'white';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={{ ...styles.container, backgroundColor }}>
        {props.children}
      </SafeAreaView>
    </>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
