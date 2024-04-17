/**
 * @format
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react-native';
import App from '../App';

test('App renders correctly', async () => {
  render(<App />);

  expect(await screen.findByRole('button', { name: 'Rewards' })).toBeOnTheScreen();
  expect(await screen.findByRole('button', { name: 'Scan' })).toBeOnTheScreen();
  expect(await screen.findByRole('button', { name: 'Locations' })).toBeOnTheScreen();
  expect(await screen.findByRole('button', { name: 'More' })).toBeOnTheScreen();
});
