# 2. Remove Flipper

Date: 2024-04-12

## Status

Accepted

## Context

Flipper has been [deprecated in v0.73 of React Native and will be removed in v0.74](https://github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0641-decoupling-flipper-from-react-native-core.md) due to:

- instability of debugging experience
- subpar performance
- delays in addressing issues with Flipper in React Native
- slower builds times

Since this project was built with v0.73 of React Native, we still includes Flipper, we need to determine whether to remove it.

## Decision

We will remove Flipper from this project.

## Consequences

Since this project doesn't use Flipper, removing it will

- remove an unnecessary dependency and possible complexity
- reduces maintenance overhead to keeping it
- eliminate issues related to compatibility with other dependencies or tools
- [speed up CI builds](https://reactnative.dev/docs/speeding-ci-builds)

We will need to implement [alternative debugging solutions](https://shift.infinite.red/why-you-dont-need-flipper-in-your-react-native-app-and-how-to-get-by-without-it-3af461955109) which will be documented in a separate ADR.
