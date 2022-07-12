import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from '@styled-icons/bootstrap';
import { Button, Colors } from '@/UI';
import { useMoviesContext } from '@/context';
import { EXTERNAL_LINK, URL } from '@/constants';
import { addDefaultSrc } from '@/utils';
import { IMovie } from '@/service';
import { showAlert } from '@/redux/actions';
import { useDispatch } from '@/redux/store';
import { CenteredRow, InfoWrapper, RatingWrapper, InfoImg } from './styles';

const CardContainer: React.FC<{ movieId: string }> = ({ movieId }) => {
  const { query, resetCardInfo } = useMoviesContext();
  const [movie, setMovie] = useState<IMovie>(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const fetchMovies = React.useCallback(async () => {
    try {
      const response = await fetch(`${URL}/${movieId}`);
      if (!response.ok) {
        throw new Error('NO SUCH MOVIE');
      }
      const json = await response.json();
      setMovie(json);
    } catch (e) {
      dispatch(showAlert('Warning', e.message || 'NO SUCH MOVIE', 'warning'));
      navigate(`/${query}`);
    }
  }, [dispatch, movieId, navigate, query]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

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
