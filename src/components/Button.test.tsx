import * as React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Button } from './Button';

test('Correctly renders button', async () => {
  render(<Button text="Press me" />);

  expect(await screen.findByRole('button', { name: 'Press me' })).toBeOnTheScreen();
});
