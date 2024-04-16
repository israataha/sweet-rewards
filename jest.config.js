module.exports = {
  // https://www.valentinog.com/blog/jest-coverage/
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
  preset: 'react-native',
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.ts',
  },
  // https://github.com/callstack/react-native-testing-library/blob/main/examples/react-navigation/jest.config.js
  setupFilesAfterEnv: ['./node_modules/react-native-gesture-handler/jestSetup.js', '<rootDir>/jest/setup.ts'],
  testMatch: ['**/*.test.ts?(x)'],
  transformIgnorePatterns: ['node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)'],
};
