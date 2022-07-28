import React from 'react';
import { Container } from 'styled-bootstrap-grid';
import { Banner } from './styles';
import BannerContainer from './BannerContainer';
import CardContainer from './CardContainer';
import { useMoviesContext } from '@/context';

const Header: React.FC = () => {

  const { movieId } = useMoviesContext();

  return (
    <Banner>
      <Container>
        {movieId ? <CardContainer movieId={movieId} /> : <BannerContainer />}
      </Container>
    </Banner>
  );
};
export default Header;
