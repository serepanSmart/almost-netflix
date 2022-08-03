import React from 'react';
import styled from 'styled-components';
import { Row } from 'styled-bootstrap-grid';
import MovieCard from '@/components/MovieCard';
import { IMovie } from '@/service';

export const CenteredRow = styled(Row)`
  margin-left: 0;
  margin-right: 0;
`;

const MoviesContainer: React.FC<{
  list: IMovie[];
}> = ({ list }) => {
  if (!list && !list.length) {
    return <h3>Sorry, no movies found, check later please</h3>;
  }

  return (
    <>
      <h2>
        <b>{list.length}</b> movies found
      </h2>
      <CenteredRow>
        {list.map((card) => (
          <MovieCard key={card.id} card={card} />
        ))}
      </CenteredRow>
    </>
  );
};

export default MoviesContainer;
