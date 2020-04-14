import React from 'react';
import { ICard } from 'pokemon-tcg-sdk-typescript/dist/sdk';

const Card = ({ name }: ICard) => (
  <div className="card">
    {
      name
        ? (<span className="card-name">{name}</span>)
        : (<span>nao há card</span>)

    }
  </div>
);
export default Card;
