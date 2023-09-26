module.exports = {
  // other fields
  dependencies: {
    ...(process.env.NO_FLIPPER
      ? { 'react-native-flipper': { platforms: { ios: null } } }
      : {}),
  },
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/fonts'],
};
