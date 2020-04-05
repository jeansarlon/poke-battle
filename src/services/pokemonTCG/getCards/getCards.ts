import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { IcardFilter } from './CardFiltersBuilder';

export const getCards = async (filters: IcardFilter[]): Promise<PokemonTCG.Card[]> => {
  return await PokemonTCG.Card.where(filters);
};