import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'styled-bootstrap-grid';
import { Alert, Loader } from '@/UI';
import { useHandleMovie } from './helpers';
import { defaultOptions } from './helpers';
import Controls from '../Controls';
import MoviesContainer from './MoviesContainer';
import { RootState } from '@/redux/rootReducer';

const MoviesList: React.FC = () => {
  const {
    loading,
    filtersList,
    selectedOption,
    handleChangeOption,
    handleSelectGenre,
    moviesList,
  } = useHandleMovie();

  const alert = useSelector((state: RootState) => {
    return state.app.alert;
  });

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
        <Alert type={alert.type} title={alert.title} message={alert.message} />
      )}
      {loading ? <Loader /> : <MoviesContainer list={moviesList} />}
    </Container>
  );
};

export default MoviesList;
