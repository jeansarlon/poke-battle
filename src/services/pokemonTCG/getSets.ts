import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

export const getSets = async (): Promise<PokemonTCG.Set[]> => {
  return await PokemonTCG.Set.all();
};

export default getSets;
