import React from 'react';
import { Button, Colors } from '@/UI';
import { useMoviesContext } from '@/context';
import { Search } from '@styled-icons/bootstrap';
import { CenteredRow, InfoWrapper, RatingWrapper, InfoImg } from './styles';
import { EXTERNAL_LINK } from '@/constants';

const CardContainer: React.FC = () => {
  const { movie, setMovie, setOpenedCard } = useMoviesContext();

  const resetCardInfoHandler = (): void => {
    setOpenedCard(false);
    setMovie(null);
  };

  return (
    <>
      <CenteredRow reduceSpacer>
        <EXTERNAL_LINK />
        <Button onClick={resetCardInfoHandler} icon>
          <Search size={16} fill={Colors.Scarlet} />
        </Button>
      </CenteredRow>
      <CenteredRow reduceSpacer>
        <InfoImg src={movie.src} alt={movie.title} />
        <InfoWrapper>
          <h1>
            {movie.title}
            <RatingWrapper>{movie.rating}</RatingWrapper>
          </h1>
          <p>{movie.genre}</p>
          <h3>{movie.year}</h3>
          <h3>{movie.runtime}</h3>
          <p>{movie.description}</p>
        </InfoWrapper>
      </CenteredRow>
    </>
  );
};

export default CardContainer;
