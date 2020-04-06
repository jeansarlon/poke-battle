import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { IcardFilter } from './CardFiltersBuilder';

const getCardsLocal = () => {
  const { REACT_APP_POKEMON_TCG_HOST, REACT_APP_POKEMON_TCG_CARDS_PATH } = process.env;
  return fetch(`${REACT_APP_POKEMON_TCG_HOST}${REACT_APP_POKEMON_TCG_CARDS_PATH}`)
    .then((res) => res.json())
    .then((data) => data.cards);
};

export const getCards = async (filters: IcardFilter[]): Promise<PokemonTCG.Card[] | undefined> => {
  switch (process.env.NODE_ENV) {
    case 'development': return await getCardsLocal();
    default: return await PokemonTCG.Card.where(filters);
  }
};

