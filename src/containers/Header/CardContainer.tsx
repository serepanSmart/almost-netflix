import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Search } from '@styled-icons/bootstrap';
import { Button, Colors } from '@/UI';
import { useMoviesContext } from '@/context';
import { EXTERNAL_LINK, URL } from '@/constants';
import { addDefaultSrc } from '@/utils';
import { IMovie } from '@/service';
import { showAlert } from '@/redux/actions';
import { useDispatch } from '@/redux/store';
import { RootState } from '@/redux/rootReducer';
import { CenteredRow, InfoWrapper, RatingWrapper, InfoImg } from './styles';

const CardContainer: React.FC = () => {
  const { query, resetCardInfo } = useMoviesContext();
  const [movie, setMovie] = useState<IMovie>(null);

  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const moviesList = useSelector((state: RootState) => {
    return state.movies.moviesList.data;
  });

  const fetchMovies = React.useCallback(async () => {
    try {
      const response = await fetch(`${URL}/${id}`);
      if (!response.ok) {
        throw new Error('NO SUCH MOVIE');
      }
      const json = await response.json();
      setMovie(json);
      // navigate(`${id}${query}`);
      navigate(`${query}`);
    } catch (e) {
      dispatch(showAlert('Warning', e.message || 'NO SUCH MOVIE', 'warning'));
      navigate(`/${query}`);
    }
  }, [dispatch, id, navigate, query]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies, moviesList]);

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
