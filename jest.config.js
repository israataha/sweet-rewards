module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.ts',
  },
  setupFiles: ['<rootDir>/jest/setup.ts'],
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
  testMatch: ['**/*.test.ts?(x)'],
  transformIgnorePatterns: ['node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)'],
};
