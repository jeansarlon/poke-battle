import React from 'react';
import { render, act } from '@testing-library/react';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { getCards } from '../../../../../services/pokemonTCG';
import Card from '..';

jest.mock('../../../../../services/pokemonTCG');

describe('Card', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('should mount Component when has cards', async () => {
    const mockedUseFooContext = getCards as jest.Mock<Promise<Partial<PokemonTCG.Card>[]>>;
    mockedUseFooContext.mockImplementation(() => {
      return new Promise((resolve) => resolve([{ id: '1', name: 'pikachu' }]));
    });
    let component,
      element;

    await act(async () => {
      const { container } = await render(<Card />);
      component = container;
      element = container.querySelector('.card');
    });

    expect(component).toMatchSnapshot();
    expect(element).toBeDefined();
  });

  test('should mount Component when has no cards', async () => {
    const mockedUseFooContext = getCards as jest.Mock<Promise<PokemonTCG.Card[] | undefined>>;
    mockedUseFooContext.mockImplementation(() => {
      return new Promise((resolve) => resolve(undefined));
    });
    let component;

    await act(async () => {
      const { container } = await render(<Card />);
      component = container;
    });

    expect(component).toMatchSnapshot();
  });
});

