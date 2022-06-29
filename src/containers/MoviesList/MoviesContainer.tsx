import React from 'react';
import styled from 'styled-components';
import { Row } from 'styled-bootstrap-grid';
import MovieCard from '@/components/MovieCard';
import { IMovie } from '@/service';
import { useNavigate } from 'react-router-dom';
import { useMoviesContext } from '@/context';

export const CenteredRow = styled(Row)`
  margin-left: 0;
  margin-right: 0;
`;

const MoviesContainer: React.FC<{ list: IMovie[] }> = ({ list }) => {
  const navigate = useNavigate();
  const { setYOffset } = useMoviesContext();

  const handleShowMovie = React.useCallback(
    (id: number) => {
      navigate(`${id}`, { replace: true });
      window.scrollTo(0, 0);
      setYOffset(window.scrollY);
    },
    [navigate, setYOffset],
  );

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
            poster_path={card['poster_path']}
            key={card.id}
            title={card.title}
            genres={card.genres}
            release_date={card['release_date']}
            overview={card.overview}
            runtime={card.runtime}
            vote_average={card['vote_average']}
            card={card}
            onCLick={() => handleShowMovie(+card.id)}
          />
        ))}
      </CenteredRow>
    </>
  );
};

export default MoviesContainer;
