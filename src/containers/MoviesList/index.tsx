import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'styled-bootstrap-grid';
import { Alert, Loader } from '@/UI';
import Controls from '../Controls';
import MoviesContainer from './MoviesContainer';
import { RootState } from '@/redux/rootReducer';
import { defaultOptions } from '@/context/utils';
import { useHandleMovie } from './utils';
import { MoviesListProps } from '@/types';

const MoviesList: React.FC<MoviesListProps> = ({ list }) => {
  const {
    handleSelectGenre,
    filtersList,
    handleChangeOption,
    selectedOption,
  } = useHandleMovie();

  const loading = useSelector((state: RootState) => {
    return state.app.loading;
  });

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
      {loading ? (
        <Loader />
      ) : (
        <MoviesContainer list={list} />
      )}
    </Container>
  );
};

export default MoviesList;
