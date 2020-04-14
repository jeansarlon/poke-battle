import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('should renders component', () => {
    const { getByTestId } = render(<App />);
    const element = getByTestId('App');
    expect(element).toBeInTheDocument();
  });
});

