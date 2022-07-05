import React from 'react';
import {
  // Routes, Route,
  useLocation,
} from 'react-router-dom';
import { Container } from 'styled-bootstrap-grid';
import { Banner } from './styles';
import BannerContainer from './BannerContainer';
import CardContainer from './CardContainer';

const Header: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const movieId = searchParams.get('movie');

  return (
    <Banner>
      <Container>
        {/* <Routes>
          <Route path="/" element={<BannerContainer />} />
          <Route path=":id" element={<CardContainer />} />
        </Routes> */}
        {movieId ? <CardContainer movieId={movieId} /> : <BannerContainer />}
      </Container>
    </Banner>
  );
};
export default Header;
