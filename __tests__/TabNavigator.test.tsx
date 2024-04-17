import * as React from 'react';
import { fireEvent, screen } from '@testing-library/react-native';
import { TabNavigator } from '../src/navigators/TabNavigator';
import { renderNavigator } from './utils/test-utils';

test('Correctly renders tabs', async () => {
  renderNavigator(<TabNavigator />);

  // React Navigation uses `button` role for tab buttons
  expect(await screen.findByRole('button', { name: 'Rewards' })).toBeOnTheScreen();
  expect(await screen.findByRole('button', { name: 'Scan' })).toBeOnTheScreen();
  expect(await screen.findByRole('button', { name: 'Locations' })).toBeOnTheScreen();
  expect(await screen.findByRole('button', { name: 'More' })).toBeOnTheScreen();
});

test('Correctly changes tabs', async () => {
  renderNavigator(<TabNavigator />);

  const scanTab = await screen.findByRole('button', { name: 'Scan' });
  const locationsTab = await screen.findByRole('button', { name: 'Locations' });
  const moreTab = await screen.findByRole('button', { name: 'More' });

  expect(await screen.findByRole('header', { name: 'Rewards' })).toBeOnTheScreen();

  fireEvent.press(scanTab);

  expect(await screen.findByRole('header', { name: 'Scan' })).toBeOnTheScreen();
  expect(screen.queryByRole('header', { name: 'Rewards' })).not.toBeOnTheScreen();

  fireEvent.press(locationsTab);

  expect(await screen.findByRole('header', { name: 'Locations' })).toBeOnTheScreen();
  expect(screen.queryByRole('header', { name: 'Scan' })).not.toBeOnTheScreen();

  fireEvent.press(moreTab);

  expect(await screen.findByRole('header', { name: 'More' })).toBeOnTheScreen();
  expect(screen.queryByRole('header', { name: 'Locations' })).not.toBeOnTheScreen();
});
