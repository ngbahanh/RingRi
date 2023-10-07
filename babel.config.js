module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@assets': './src/assets',
          '@components': './src/components',
          '@configs': './src/configs',
          '@hooks': './src/hooks',
          '@locales': './src/locales',
          '@navigators': './src/navigators',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@themes': './src/themes',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
