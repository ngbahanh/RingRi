module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.(lottie)$': '<rootDir>/jest/__mocks__/lottieMock.js',
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
};
