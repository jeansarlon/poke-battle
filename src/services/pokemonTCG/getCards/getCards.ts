import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { IcardFilter } from './CardFiltersBuilder';

const getFromStuby = async () => {
  const {
    REACT_APP_POKEMON_TCG_HOST,
    REACT_APP_POKEMON_TCG_CARDS_PATH
  } = process.env;

  const res = await fetch(`${REACT_APP_POKEMON_TCG_HOST}${REACT_APP_POKEMON_TCG_CARDS_PATH}`);
  const data = await res.json();
  return data.cards;
};

export const getCards = async (filters: IcardFilter[]): Promise<PokemonTCG.Card[] | undefined> => {
  switch (process.env.NODE_ENV) {
    case 'development': return await getFromStuby();
    default: return await PokemonTCG.Card.where(filters);
  }
};

