import React from 'react';
import { Card, Caption } from './styles';

interface ICard {
  title: string;
  genre: string;
  src: string;
  year: string | number;
}

const MovieCard: React.FC<ICard> = ({
  title,
  genre,
  src,
  year
}) => (
  <Card md={4}>
    <img src={src} alt={title} />
    <Caption>
      <h3>{title}</h3>
      <span>{year}</span>
    </Caption>
    <p>{genre}</p>
  </Card>
);

export default MovieCard;
