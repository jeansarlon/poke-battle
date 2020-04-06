import React, { useEffect, useState } from 'react';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { getCards } from '../../../../services/pokemonTCG';
import { CardFiltersBuilder, IcardFilter } from '../../../../services/pokemonTCG/getCards/';

const Card = () => {
  const [cards, setcards] = useState<PokemonTCG.Card[] | undefined>([]);

  useEffect(() => {
    (async () => {
      const data: IcardFilter[] = new CardFiltersBuilder()
        .filter({ name: 'supertype', value: 'pokemon' })
        .build();

      const response = await getCards(data);
      setcards(response);
    })();
  }, []);

  return (
    <div className="cards">
      {
        cards
          ? cards.map((card) => (<span className="card" key={card.id}>{card.name}</span>))
          : <span className="no-cards">Mão vazia</span>
      }
    </div>
  );
};
export default Card;
