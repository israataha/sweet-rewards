# Configuring Jest and React Native Testing Library

This project uses Jest and React Native Testing Library for unit testing.

## Jest

For new projects built with React Native CLI, Jest setup is included by default when running `react-native init`.

### SVG

To use Jest to test our React Native components that import .svg images, we need to add a file (e.g. \_\_mocks\_\_/svgMock.ts) with the following configuration that mocks the SVG images that are transformed to React components:

```
module.exports = "SvgMock";
```

We then modify the `jest.config.js` file to add the file to the `moduleNameMapper` option

```
module.exports = {
  moduleNameMapper: {
    "\\.svg": "<rootDir>/__mocks__/svgMock.js"
  }
};
```

Refer to the [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer?tab=readme-ov-file#usage-with-jest) library for additional information.

### React Navigation

The following section uses the React Navigation documentation on [Testing with Jest](https://reactnavigation.org/docs/testing/) to set up mocks and modify configuration files to support testing React Navigation with Jest.

Since we're using `@react-navigation/stack`, we only need to mock `react-native-gesture-handler`

To add the mocks, create a file (e.g `jest/setup.js`), if it doesn't already exist and add the following code:

```
import '@testing-library/react-native/extend-expect';
```

then modify your `jest.config.js` file to reference it in `setupFilesAfterEnv`

```
{
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts']
}
```

Alternatively, you can modify the `setupFilesAfterEnv` to reference the node_module directly

```
{
  preset: 'react-native',
  setupFilesAfterEnv: ['./node_modules/react-native-gesture-handler/jestSetup.js']
}
```

It is also recommended to use [React Native Testing Library](https://callstack.github.io/react-native-testing-library/docs/getting-started) to write your tests.

For examples on writing tests refer to the [Writing Tests](https://reactnavigation.org/docs/testing/#writing-tests) section of the documentation or the examples in the React Native Testing Library [GitHub repository](https://github.com/callstack/react-native-testing-library/tree/c81c89bdf94540cb4d55d2be043d204d736840e0/examples/react-navigation).

## React Native Testing Library

### Install

```
npm install --save-dev @testing-library/react-native
```

### Jest Matchers

To set up React Native-specific Jest matchers, create a file (e.g `jest/setup.js`), if it doesn't already exist and add the following code:

```
import '@testing-library/react-native/extend-expect';
```

then modify your `jest.config.js` file to reference it in `setupFilesAfterEnv`

```
{
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts']
}
```

Alternatively, you can modify the `setupFilesAfterEnv` to reference the library directly

```
{
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect']
}
```

### ESLint plugin

It is recommended to set up the `eslint-plugin-testing-library` package to help avoid common Testing Library mistakes and bad practices.

Install the plugin (assuming you already have eslint installed & configured):

```
npm install --save-dev eslint-plugin-testing-library
```

Then, add relevant entry to your ESLint config (e.g., .eslintrc.js).

```
module.exports = {
  overrides: [
    {
      // Test files only
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react']
    }
  ]
};
```

Refer to the [React Native Testing Library](https://callstack.github.io/react-native-testing-library/docs/getting-started) documentation for additional information.
