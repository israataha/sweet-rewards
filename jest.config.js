module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest/setup.ts'],
  transformIgnorePatterns: ['node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)'],
};
