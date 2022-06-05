import React, { useState, useEffect, useCallback } from 'react';
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
  // STATES FOR GET MOVIES, SORT AND FILTER
  const [moviesList, setMoviesList] = useState<IMovie[]>([]);
  const [filtersState, setFiltersState] = useState<ITab[]>(filters);
  const [selectedOption, setSelectedOption] = useState(() => {
    const option = defaultOptions[0];
    if (!option) {
      throw new Error('empty options list');
    }
    return option;
  });

  // SORT HANDLER FOR SELECT
  const handleChangeOption = useCallback((newValue: Option) => {
    setSelectedOption(newValue as Option);
    setMoviesList((prev) => {
      prev.sort(sortByField(newValue.value));
      return [...prev];
    });
  }, []);

  // GENRE FILTER
  const renderMoviesByGenre = useCallback((e: ITab) => {
    const selectedMovies = movies.filter((movie) => {
      return movie.genre === e.value;
    });
    if (e.value === 'All') {
      return movies;
    }
    return selectedMovies;
  }, []);

  const handleSelectGenre = useCallback(
    (e: ITab) => {
      setFiltersState((state) => {
        state.find((tab) => tab.active).active = false;
        state.find((tab) => tab.value === e.value).active = true;
        return [...state];
      });
      setMoviesList(renderMoviesByGenre(e));
    },
    [renderMoviesByGenre],
  );

  useEffect(() => {
    setMoviesList(movies.sort(sortByField(defaultOptions[0]?.value)));
  }, []);

  return (
    <main>
      <Container>
        <ControlsRow>
          <Filter filters={filtersState} onClick={handleSelectGenre} />
          <Sort
            onChange={handleChangeOption}
            selectedOption={selectedOption}
            options={defaultOptions}
            value={selectedOption}
          />
        </ControlsRow>
        {moviesList.length ? (
          <h3>
            <b>{moviesList.length}</b> movies found
          </h3>
        ) : (
          <h3>Sorry, no movies found, check later please</h3>
        )}
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
    </main>
  );
};

export default MoviesList;
