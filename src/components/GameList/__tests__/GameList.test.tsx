import React from 'react';
import { render } from '@testing-library/react';
import GameList from '../GameList';
import { Game } from '../Game.interface';

const games: Game[] = [
  { id: 1, title: 'Civ 6', description: 'Turn based strategy game' },
  { id: 2, title: 'COD', description: 'FPS' },
];

describe('<GameList>', () => {
  it('show a list of games', () => {
    const { container } = render(<GameList games={games} />);
    expect(container).toHaveTextContent('Civ 6');
    expect(container).toHaveTextContent('Turn based strategy game');
  });
});
