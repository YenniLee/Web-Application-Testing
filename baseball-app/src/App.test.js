import React from 'react';
import App from './App';
import { render, getByTestId, fireEvent } from '@testing-library/react';

test('App renders without crashing', () => {
  render(<App />);
});

test('contains the scores for balls and strikes', () => {
  const container = render(<App />);
  container.getByTestId('ballsValue');
  container.getByTestId('strikesValue');
})
