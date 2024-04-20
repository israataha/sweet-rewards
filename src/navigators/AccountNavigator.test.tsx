import * as React from 'react';
import { act, fireEvent, screen } from '@testing-library/react-native';
import { AccountNavigator } from './AccountNavigator';
import { renderNavigator } from '../../__tests__/utils/test-utils';

test('Correctly renders tabs', async () => {
  renderNavigator(<AccountNavigator />);

  await act(async () => {
    expect(await screen.findByRole('header', { name: 'Account' })).toBeOnTheScreen();
    expect(await screen.findByText('Profile')).toBeOnTheScreen();
    expect(await screen.findByText('Personal info')).toBeOnTheScreen();
    expect(await screen.findByText('Transaction history')).toBeOnTheScreen();
  });
});

test('Navigates to the Profile screen', async () => {
  renderNavigator(<AccountNavigator />);

  await act(async () => {
    expect(await screen.findByRole('header', { name: 'Account' })).toBeOnTheScreen();
  });

  fireEvent.press(await screen.findByText('Personal info'));

  await act(async () => {
    expect(await screen.findByRole('header', { name: 'Profile' })).toBeOnTheScreen();
    expect(screen.queryByRole('header', { name: 'Account' })).not.toBeOnTheScreen();
  });

  fireEvent.press(await screen.findByRole('button', { name: 'Account' }));

  await act(async () => {
    expect(await screen.findByRole('header', { name: 'Account' })).toBeOnTheScreen();
    expect(screen.queryByRole('header', { name: 'Profile' })).not.toBeOnTheScreen();
  });
});

test('Navigates to the History screen', async () => {
  renderNavigator(<AccountNavigator />);

  await act(async () => {
    expect(await screen.findByRole('header', { name: 'Account' })).toBeOnTheScreen();
  });

  fireEvent.press(await screen.findByText('Transaction history'));

  await act(async () => {
    expect(await screen.findByRole('header', { name: 'History' })).toBeOnTheScreen();
    expect(screen.queryByRole('header', { name: 'Account' })).not.toBeOnTheScreen();
  });

  fireEvent.press(await screen.findByRole('button', { name: 'Account' }));

  await act(async () => {
    expect(await screen.findByRole('header', { name: 'Account' })).toBeOnTheScreen();
    expect(screen.queryByRole('header', { name: 'History' })).not.toBeOnTheScreen();
  });
});
