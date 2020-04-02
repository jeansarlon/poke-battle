import React from 'react';
import { Hand } from '../../../hand/components';

const Board = ({ styleclass, title }: Record<string, string>) => (
  <div className={styleclass}>
    {title}
    <Hand />
  </div>
);

export default Board;
