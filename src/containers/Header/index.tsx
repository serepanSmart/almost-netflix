import React from 'react';
import { Container } from 'styled-bootstrap-grid';
import { Banner } from './styles';
import BannerContainer from './BannerContainer';
import CardContainer from './CardContainer';
import { useMoviesContext } from '@/context';
import { Route, Routes } from 'react-router-dom';

const Header: React.FC = () => {
  const { movieId } = useMoviesContext();

  return (
    <Banner>
      <Container>
        <Routes>
          {movieId ? (
            <>
              <Route path="/" element={<CardContainer movieId={movieId} />} />
              <Route
                path="/:searchQuery"
                element={<CardContainer movieId={movieId} />}
              />
            </>
          ) : (
            <>
              <Route path="/" element={<BannerContainer />} />
              <Route path="/:searchQuery" element={<BannerContainer />} />
            </>
          )}
        </Routes>
      </Container>
    </Banner>
  );
};
export default Header;
