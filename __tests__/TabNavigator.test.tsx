import * as React from 'react';
import { act, fireEvent, screen } from '@testing-library/react-native';
import { TabNavigator } from '../src/navigators/TabNavigator';
import { renderNavigator } from './utils/test-utils';

test('Correctly renders tabs', async () => {
  renderNavigator(<TabNavigator />);

  await act(async () => {
    // React Navigation uses `button` role for tab buttons
    expect(await screen.findByRole('button', { name: 'Home' })).toBeOnTheScreen();
    expect(await screen.findByRole('button', { name: 'Scan' })).toBeOnTheScreen();
    expect(await screen.findByRole('button', { name: 'Locations' })).toBeOnTheScreen();
    expect(await screen.findByRole('button', { name: 'Account' })).toBeOnTheScreen();
  });
});

test('Correctly changes tabs', async () => {
  renderNavigator(<TabNavigator />);

  await act(async () => {
    expect(await screen.findByRole('header', { name: 'Home' })).toBeOnTheScreen();
  });

  fireEvent.press(await screen.findByRole('button', { name: 'Scan' }));

  await act(async () => {
    expect(await screen.findByRole('header', { name: 'Scan' })).toBeOnTheScreen();
    expect(screen.queryByRole('header', { name: 'Home' })).not.toBeOnTheScreen();
  });

  fireEvent.press(await screen.findByRole('button', { name: 'Locations' }));

  await act(async () => {
    expect(await screen.findByRole('header', { name: 'Locations' })).toBeOnTheScreen();
    expect(screen.queryByRole('header', { name: 'Scan' })).not.toBeOnTheScreen();
  });

  fireEvent.press(await screen.findByRole('button', { name: 'Account' }));

  await act(async () => {
    expect(await screen.findByRole('header', { name: 'Account' })).toBeOnTheScreen();
    expect(screen.queryByRole('header', { name: 'Locations' })).not.toBeOnTheScreen();
  });
});
