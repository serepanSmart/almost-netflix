import React, { useEffect } from 'react';
import { Container } from 'styled-bootstrap-grid';
import { Alert, Loader } from '@/UI';
import { DATE_SORTING, useHandleMovie, defaultOptions } from './helpers';
import Controls from '../Controls';
import MoviesContainer from './MoviesContainer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '@/redux/actions';
import { RootState } from '@/redux/rootReducer';

const MoviesList: React.FC = () => {

  const {
    loading,
    alert,
    filtersList,
    selectedOption,
    handleChangeOption,
    handleSelectGenre } = useHandleMovie();

  const dispatch = useDispatch();

  const moviesList = useSelector((state: RootState) => {
    return state.movies.moviesList?.data;
  });

  // GET MOVIES BY DEFAULT
  useEffect(() => {
    dispatch(fetchMovies(DATE_SORTING));
  }, [dispatch]);

  return (
    <Container style={{ flexGrow: 1 }}>
      <Controls
        options={defaultOptions}
        filters={filtersList}
        value={selectedOption}
        selectedOption={selectedOption}
        onClick={handleSelectGenre}
        onChange={handleChangeOption}
      />
      {alert && (
        <Alert
          type={alert.type}
          title={alert.title}
          message={alert.message}
        />
      )}
      {
        loading ? <Loader /> : <MoviesContainer list={moviesList} />
      }
    </Container>
  );
};

export default MoviesList;
