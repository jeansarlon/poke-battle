import React from 'react';
import { render, act } from '@testing-library/react';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { getCards } from '../../../../../services/pokemonTCG';
import Card from '..';

describe('Card', () => {
  const card = new PokemonTCG.Card();
  card.name = 'pikachu';

  test('should mount Component when has name', async () => {
    const { container } = render(<Card {...card} />);
    const element = container.querySelector('.card');

    expect(container).toMatchSnapshot();
    expect(element).toBeDefined();
  });

  test('should mount Component when not has name', async () => {
    const cardWithoutName = { ...card, name: '' };
    const { container } = render(<Card {...cardWithoutName} />);

    expect(container).toMatchSnapshot();
  });
});

