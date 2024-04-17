import * as React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Scan } from './Scan';

test('Correctly renders screen', async () => {
  render(<Scan />);

  expect(await screen.findByText('Scan to earn points')).toBeOnTheScreen();
  expect(await screen.findByText('Earn 1 pt per $1')).toBeOnTheScreen();
  expect(await screen.findByLabelText('QR Code')).toBeOnTheScreen();
});
