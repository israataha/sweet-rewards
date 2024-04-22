import * as React from 'react';
import { render, screen } from '@testing-library/react-native';
import { ProgressBar } from './ProgressBar';

test('Correctly renders progress br', async () => {
  render(<ProgressBar progress={0.5} />);

  expect(await screen.findByRole('progressbar', { name: 'Points progress' })).toBeOnTheScreen();
});

test('Correctly renders progress bar with tiers', async () => {
  render(<ProgressBar progress={0.5} tiers={[50, 100, 150]} />);

  expect(await screen.findByRole('progressbar', { name: 'Points progress' })).toBeOnTheScreen();
  expect(await screen.findByText('50')).toBeOnTheScreen();
  expect(await screen.findByText('100')).toBeOnTheScreen();
  expect(await screen.findByText('150')).toBeOnTheScreen();
});
