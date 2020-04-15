import React from 'react';
import { render, act } from '@testing-library/react';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { getCards } from '@services/pokemonTCG';
import Hand from '..';

jest.mock('@services/pokemonTCG');

describe('Hand', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('should mount Component with cards', async () => {
    const mockedUseFooContext = getCards as jest.Mock<Promise<Partial<PokemonTCG.Card>[]>>;
    mockedUseFooContext.mockImplementation(() => {
      return new Promise((resolve) => resolve([{ id: '1', name: 'pikachu' }]));
    });
    let component,
      element;
    await act(async () => {
      const { container } = render(<Hand />);
      element = container.querySelector('.hand');
      component = container;
    });

    expect(element).toBeDefined();
    expect(component).toMatchSnapshot();
  });

  test('should mount Components without cards', async () => {
    const mockedUseFooContext = getCards as jest.Mock<Promise<Partial<PokemonTCG.Card>[]>>;
    mockedUseFooContext.mockImplementation(() => {
      return new Promise((resolve) => resolve([]));
    });
    let component;
    await act(async () => {
      const { container } = render(<Hand />);
      component = container;
    });
    expect(component).toMatchSnapshot();
  });
});

