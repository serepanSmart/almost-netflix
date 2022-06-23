import React from 'react';
import { Button, Colors } from '@/UI';
import { useMoviesContext } from '@/context';
import { Search } from '@styled-icons/bootstrap';
import { CenteredRow, InfoWrapper, RatingWrapper, InfoImg } from './styles';
import { EXTERNAL_LINK } from '@/constants';
import { addDefaultSrc } from '@/utils';

const CardContainer: React.FC = () => {
  const { movie, setMovie, setOpenedCard } = useMoviesContext();

  const resetCardInfoHandler = (): void => {
    setOpenedCard(false);
    setMovie(null);
  };

  const releaseDate = movie['release_date'];
  const genres = movie.genres;

  return (
    <>
      <CenteredRow reduceSpacer>
        <EXTERNAL_LINK />
        <Button onClick={resetCardInfoHandler} icon>
          <Search size={16} fill={Colors.Scarlet} />
        </Button>
      </CenteredRow>
      <CenteredRow reduceSpacer>
        <InfoImg
          src={movie['poster_path'] ?? 'NO POSTER YET'}
          alt={movie.title}
          onError={addDefaultSrc}
        />
        <InfoWrapper>
          <h1>
            {movie.title}
            <RatingWrapper>
              {movie['vote_average'] ?? 0}
            </RatingWrapper>
          </h1>
          <p>{genres ? genres.join(', ') : 'GENRES LIST IS EMPTY'}</p>
          <h3>
            {releaseDate
              ? releaseDate.split('-')[0]
              : 'NO INFO ABOUT RELEASE DATE'}
          </h3>
          <h3>{movie?.runtime ?? 'NO INFO ABOUT DURATION YET'}</h3>
          <p>{movie?.overview ?? 'NO INFO ABOUT THIS FILM YET'}</p>
        </InfoWrapper>
      </CenteredRow>
    </>
  );
};

export default CardContainer;
