import React from 'react';
import { Card, Col, Row } from 'antd';
import { Game } from './Game.interface';

const GameList = ({ games }: {games: Game[]}) => (
  <Row gutter={16}>
    {games.map((game: Game) => (
      <Col span={8} key={game.id}>
        <Card title={game.title} bordered={false}>
          <p>{game.description}</p>
        </Card>
      </Col>
    ))}
  </Row>
);

export default GameList;
