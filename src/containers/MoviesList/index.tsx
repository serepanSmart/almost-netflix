import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'styled-bootstrap-grid';
import { ControlsRow } from '../Controls/styles';
import { Filter, Sort } from '../Controls';
import MovieCard from '@/components/MovieCard';
import { useMoviesContext } from '@/context';

const CenteredRow = styled(Row)`
  margin-left: 0;
  margin-right: 0;
`;

const MoviesList: React.FC = () => {

  const {
    moviesList,
    handleSelectGenre,
    filtersState,
    selectedOption,
    handleChangeOption,
    defaultOptions,
  } = useMoviesContext();

  return (
    <Container>
      <ControlsRow>
        <Filter
          filters={filtersState}
          onClick={handleSelectGenre}
        />
        <Sort
          onChange={handleChangeOption}
          options={defaultOptions}
          value={selectedOption}
          selectedOption={selectedOption}
        />
      </ControlsRow>
      {
        moviesList.length
          ? (
            <h3><b>{moviesList.length}</b> movies found</h3>
          )
          : (
            <h3>Sorry, no movies found, check later please</h3>
          )
      }
      <CenteredRow>
        {moviesList.map((card) => (
          <MovieCard
            src={card.src}
            key={card.id}
            title={card.title}
            genre={card.genre}
            year={card.year}
            card={card}
          />
        ))}
      </CenteredRow>
    </Container>
  );
};

export default MoviesList;
