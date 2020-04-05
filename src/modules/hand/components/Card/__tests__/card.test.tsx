import React from 'react';
import { render } from '@testing-library/react';
import Card from '..';

describe('Card', () => {
  test('should mount Component', () => {
    const { container } = render(<Card />);

    const element = container.querySelector('.card');
    expect(element).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});

