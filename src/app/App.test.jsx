/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App rendering', () => {
  it('renders without crash', async () => {
    render(<App />);
  });
});
