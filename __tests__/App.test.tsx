/**
 * @format
 */

import * as React from 'react';
import { act, render, screen } from '@testing-library/react-native';
import App from '../App';

test('App renders correctly', async () => {
  render(<App />);

  await act(async () => {
    expect(await screen.findByRole('button', { name: 'Rewards' })).toBeOnTheScreen();
    expect(await screen.findByRole('button', { name: 'Scan' })).toBeOnTheScreen();
    expect(await screen.findByRole('button', { name: 'Locations' })).toBeOnTheScreen();
    expect(await screen.findByRole('button', { name: 'More' })).toBeOnTheScreen();
  });
});
