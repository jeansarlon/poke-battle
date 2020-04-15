import React from 'react';
import './App.scss';
import { Board } from '@modules/board/components';

const App = () => (
  <div data-testid="App" className="App">
    <Board />
  </div>
);

export default App;
