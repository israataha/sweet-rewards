import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { getProgress, Home } from './Home';

describe('getProgress', () => {
  test('Returns value if value less than 1', () => {
    expect(getProgress(0, 5)).toBe(0);
    expect(getProgress(3, 5)).toBe(0.6);
    expect(getProgress(99, 100)).toBe(0.99);
    expect(getProgress(5, 5)).toBe(1);
  });

  test('Returns 1 if value is greater than 1', () => {
    expect(getProgress(10, 5)).toBe(1);
  });

  test('Returns 0 if value is negative', () => {
    expect(getProgress(-5, 10)).toBe(0);
  });

  test('Returns 0 if maxPoints is 0', () => {
    expect(getProgress(5, 0)).toBe(0);
  });
});

test('Correctly renders screen', async () => {
  render(<Home />);

  expect(await screen.findByText('Star balance')).toBeOnTheScreen();
  expect(await screen.findByText('Rewards options')).toBeOnTheScreen();
  expect(await screen.findByRole('progressbar')).toBeOnTheScreen();
  expect(await screen.findByRole('button', { name: 'Details' })).toBeOnTheScreen();
});

test('Correctly shows and hides Rewards options', async () => {
  render(<Home />);

  expect(screen.queryByText('Rewards you can get with points')).not.toBeOnTheScreen();

  fireEvent.press(await screen.findByText('Rewards options'));
  expect(await screen.findByText('Rewards you can get with points')).toBeOnTheScreen();

  fireEvent.press(await screen.findByText('Rewards options'));
  expect(screen.queryByText('Rewards you can get with points')).not.toBeOnTheScreen();
});
