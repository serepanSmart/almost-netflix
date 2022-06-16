import React from 'react';
import { Container } from 'styled-bootstrap-grid';
import { Alert, Loader } from '@/UI';
import { useHandleMovie, defaultOptions } from './helpers';
import Controls from '../Controls';
import MoviesContainer from './MoviesContainer';

const MoviesList: React.FC = () => {
  const {
    loading,
    alert,
    filtersList,
    selectedOption,
    handleChangeOption,
    handleSelectGenre,
    moviesList,
  } = useHandleMovie();

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
