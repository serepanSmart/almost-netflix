import React from 'react';
import styled from 'styled-components';
import { Row } from 'styled-bootstrap-grid';
import MovieCard from '@/components/MovieCard';
import { IMovie } from '@/service';

export const CenteredRow = styled(Row)`
  margin-left: 0;
  margin-right: 0;
`;

const MoviesContainer: React.FC<{ list: IMovie[] }> = ({ list }) => {

  if (!list.length) {
    return <h3>Sorry, no movies found, check later please</h3>;
  }

  return (
    <>
      <h3>
        <b>{list.length}</b> movies found
      </h3>
      <CenteredRow>
        {list.map((card) => (
          <MovieCard
            posterPath={card['poster_path']}
            key={card.id}
            title={card.title}
            genres={card.genres}
            releaseDate={card['release_date'].split('-')[0]}
            card={card}
          />
        ))}
      </CenteredRow>
    </>
  );
};

export default MoviesContainer;
