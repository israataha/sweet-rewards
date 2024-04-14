import * as React from 'react';
import { screen } from '@testing-library/react-native';
import { TabNavigator } from '../src/navigators/TabNavigator';
import { renderNavigator } from './utils/test-utils';

test('Correctly rendering tabs', () => {
  renderNavigator(<TabNavigator />);

  // React Navigation uses `button` role for tab buttons
  expect(screen.getByRole('button', { name: 'Rewards' })).toBeOnTheScreen();
  expect(screen.getByRole('button', { name: 'Earn' })).toBeOnTheScreen();
  expect(screen.getByRole('button', { name: 'Locations' })).toBeOnTheScreen();
  expect(screen.getByRole('button', { name: 'More' })).toBeOnTheScreen();
});
