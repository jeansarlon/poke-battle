import React from 'react';
import { render } from '@testing-library/react';
import Hand from '..';

describe('Hand', () => {
  test('should mount Component', () => {
    const { container } = render(<Hand />);

    const element = container.querySelector('.hand');
    expect(element).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

