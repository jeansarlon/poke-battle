import { render } from '@testing-library/react';
import React from 'react';
import Board from '..';

describe('Board', () => {
  test('should renders component', () => {
    const { container } = render(<Board />);
    const element = container.querySelector('.board');
    expect(element).toBeInTheDocument();
  });
});
