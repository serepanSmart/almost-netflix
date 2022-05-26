import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row } from 'styled-bootstrap-grid';
import { ControlsRow } from '../Controls/styles';
import { Filter, Sort, filters } from '../Controls';
import MovieCard from '@/components/MovieCard';
import movies, { IMovie } from '@/service/movies';
import { ITab, Option } from '@/UI';
import { sortByField } from '@/utils';

const CenteredRow = styled(Row)`
  margin-left: 0;
  margin-right: 0;
`;

const defaultOptions: Option[] = [
  { value: 'year', label: 'Release Date' },
  { value: 'genre', label: 'Genre' },
];

const MoviesList: React.FC = () => {
  const [filtersState, setFiltersState] = useState<ITab[]>(filters);
  const [moviesState, setMovieState] = useState<IMovie[]>([]);
  const [selectedOption, setSelectedOption] = useState(() => {
    // to predict dynamical values in case we get them from somewhere
    const option = defaultOptions[0];
    if (!option) {
      throw new Error('Empty options list');
    }
    return option;
  });

  const renderMoviesByGenre =
  (e: React.MouseEvent<HTMLButtonElement>): IMovie[] => {
    const selectedMovies = movies.filter((movie) => {
      return movie.genre === e.currentTarget.value;
    });
    if (e.currentTarget.value.trim() === 'All') {
      return movies;
    }
    return selectedMovies;
  };

  const handleSelectGenre = (e): void => {
    setFiltersState((prev) => {
      prev.find((tab) => tab.active).active = false;
      prev.find((tab) => tab.value.trim() === e.target.value.trim())
        .active = true;
      return [...prev];
    });
    setMovieState(renderMoviesByGenre(e));
  };

  const handleChangeOption = (newValue: Option): void => {
    setSelectedOption(newValue as Option);
    const sortParameter = newValue.value;
    setMovieState((prev) => {
      return [...prev.sort(sortByField(sortParameter))];
    });
  };

  useEffect(() => {
    setMovieState(movies);
  }, []);

  return (
    <main>
      <Container>
        <ControlsRow>
          <Filter
            filters={filtersState}
            onClick={handleSelectGenre}
          />
          <Sort
            onChange={handleChangeOption}
            selectedOption={selectedOption}
            options={defaultOptions}
          />
        </ControlsRow>
        {moviesState.length ? (
          <h3>
            <b>{moviesState.length}</b> movies found
          </h3>
        ) : (
          <h3>Sorry, no movies found, check later please</h3>
        )}
        <CenteredRow>
          {moviesState.map((card) => (
            <MovieCard
              src={card.src}
              key={card.id}
              title={card.title}
              genre={card.genre}
              year={card.year}
            />
          ))}
        </CenteredRow>
      </Container>
    </main>
  );
};

export default MoviesList;
