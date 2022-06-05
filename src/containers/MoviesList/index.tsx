import React, { useCallback, useReducer } from 'react';
import styled from 'styled-components';
import { Container, Row } from 'styled-bootstrap-grid';
import { ControlsRow } from '../Controls/styles';
import { Filter, Sort } from '../Controls';
import MovieCard from '@/components/MovieCard';
import { reducer, initialState, defaultOptions } from './reducer';
import { ITab, Option } from '@/UI';

const CenteredRow = styled(Row)`
  margin-left: 0;
  margin-right: 0;
`;

const MoviesList: React.FC = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  // SORT HANDLER FOR SELECT
  const handleChangeOption = useCallback((
    newValue: Option
  ) => {
    dispatch({
      type: 'sort',
      payload: newValue.value
    });
  }, []);

  // GENRE FILTER
  const renderMoviesByGenre = useCallback((e: ITab) => {
    dispatch({
      type: 'genre',
      payload: e.value
    });
  }, []);

  return (
    <main>
      <Container>
        <ControlsRow>
          <Filter
            filters={state?.filters}
            onClick={renderMoviesByGenre}
          />
          <Sort
            onChange={handleChangeOption}
            options={defaultOptions}
            value={state.selectedOption}
            selectedOption={state.selectedOption}
          />
        </ControlsRow>
        {
          state?.movies?.length
            ? (
              <h3><b>{state?.movies?.length}</b> movies found</h3>
            )
            : (
              <h3>Sorry, no movies found, check later please</h3>
            )
        }
        <CenteredRow>
          {state?.movies.map((card) => (
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
