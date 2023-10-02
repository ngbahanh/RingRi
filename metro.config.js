const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: [...assetExts.filter(ext => ext !== 'svg'), 'lottie'],
    sourceExts: [...sourceExts, 'svg'],
    extraNodeModules: {
      tests: path.resolve(__dirname, 'tests'),
      '@assets/*': path.resolve(__dirname, 'src/assets'),
      '@components/*': path.resolve(__dirname, 'src/components'),
      '@configs/*': path.resolve(__dirname, 'src/configs'),
      '@hooks/*': path.resolve(__dirname, 'src/hooks'),
      '@locales/*': path.resolve(__dirname, 'src/locales'),
      '@navigation/*': path.resolve(__dirname, 'src/navigation'),
      '@redux/*': path.resolve(__dirname, 'src/redux'),
      '@screens/*': path.resolve(__dirname, 'src/screens'),
      '@themes/*': path.resolve(__dirname, 'src/themes'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
