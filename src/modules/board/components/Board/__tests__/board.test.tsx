import React from 'react';
import { render } from '@testing-library/react';
import Board from '..';

describe('Board', () => {
  test('should renders component', () => {
    const boardClass = 'board';
    const title = 'Board';
    const { container, getByText } = render(<Board styleclass={boardClass} title={title} />);

    expect(getByText(title)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('should has StyleClass', () => {
    const styleClass = 'board';
    const title = 'Board';
    const { getByText } = render(<Board styleclass={styleClass} title={title} />);
    expect(getByText(title)).toHaveClass(styleClass);
  });
});
