import React from 'react';
import './App.css';
import GameList from './components/GameList/GameList';
import { Game } from './components/GameList/Game.interface';

const games: Game[] = [
  { id: 1, title: 'Civ 6', description: 'Turn based strategy game' },
  { id: 2, title: 'COD', description: 'FPS' },
];

function App() {
  return (
    <div className="App" data-testid="app">
      <GameList games={games} />
    </div>
  );
}

export default App;
