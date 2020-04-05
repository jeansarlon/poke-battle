import React, { useEffect, useState } from 'react';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { getCards, getSets } from '../../../../services/pokemonTCG';
import { CardFiltersBuilder, IcardFilter } from '../../../../services/pokemonTCG/getCards/';

const Card = () => {
  const [cards, setcards] = useState<PokemonTCG.Card[]>([]);
  const [sets, setsets] = useState<PokemonTCG.Set[]>([]);

  useEffect(() => {
    (async () => {
      const data: IcardFilter[] = new CardFiltersBuilder()
        .filter({ name: 'supertype', value: 'pokemon' })
        .build();

      const response = await getCards(data);
      setcards(response);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await getSets();
      setsets(response);
    })();
  }, []);

  return (
    <div className="card">cards</div>
  );
};
export default Card;
