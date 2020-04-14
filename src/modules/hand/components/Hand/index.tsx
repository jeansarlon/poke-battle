import React, { useState, useEffect } from 'react';
import { ICard } from 'pokemon-tcg-sdk-typescript/dist/sdk';
import { IcardFilter } from '../../../../services/pokemonTCG/getCards/CardFiltersBuilder';
import { CardFiltersBuilder } from '../../../../services/pokemonTCG/getCards';
import { getCards } from '../../../../services/pokemonTCG';
import { Card } from '..';

const getcards = async (callback: Function) => {
  const data: IcardFilter[] = new CardFiltersBuilder()
    .filter({ name: 'supertype', value: 'pokemon' })
    .build();

  const response = await getCards(data);
  callback(response);
};

const Hand = () => {
  const [cards, setcards] = useState<ICard[] | undefined>([]);

  useEffect(() => {
    getcards(setcards);
  }, []);

  return (
    <div className="hand">
      <div className="cards">
        {
          cards && cards.length
            ? cards.map((card) => (<Card {...card} key={card.id} />))
            : <span className="no-cards">Mão vazia</span>
        }
      </div>
    </div>
  );
};
export default Hand;
