import React from 'react';
import { Search } from '@styled-icons/bootstrap';
import { Button, Colors } from '@/UI';
import { useMoviesContext } from '@/context';
import { EXTERNAL_LINK, API } from '@/constants';
import { addDefaultSrc } from '@/utils';
import { IMovie } from '@/service';
import { CenteredRow, InfoWrapper, RatingWrapper, InfoImg } from './styles';

const CardContainer: React.FC<{ movie?: IMovie }> = ({ movie }) => {
  const { resetCardInfo } = useMoviesContext();

  return (
    <>
      <CenteredRow reduceSpacer>
        <EXTERNAL_LINK />
        <Button onClick={resetCardInfo} icon>
          <Search size={16} fill={Colors.Scarlet} />
        </Button>
      </CenteredRow>
      <CenteredRow reduceSpacer justify>
        <InfoImg
          src={movie?.['poster_path']}
          alt={movie?.title}
          onError={addDefaultSrc}
        />
        <InfoWrapper>
          <h1>
            {movie?.title}
            <RatingWrapper>{movie?.vote_average || '-'}</RatingWrapper>
          </h1>
          <p>{movie?.genres?.join(', ') || 'Genres list will be set soon'}</p>
          <h3>
            {movie?.['release_date']?.split('-')[0] ||
              'No info about release date yet'}
          </h3>
          <h3>{movie?.runtime}</h3>
          <p>{movie?.overview}</p>
        </InfoWrapper>
      </CenteredRow>
    </>
  );
};

export default React.memo(CardContainer);
