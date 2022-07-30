import React from 'react';
import { Container } from 'styled-bootstrap-grid';
import { Banner } from './styles';
import BannerContainer from './BannerContainer';
import CardContainer from './CardContainer';
import { IMovie } from '@/service';

const Header: React.FC<{ movie?: IMovie }> = ({ movie }) => {
  // const { movieId } = useMoviesContext();

  return (
    <Banner>
      <Container>{movie ? <CardContainer movie={movie} /> : <BannerContainer />}</Container>
    </Banner>
  );
};

export default Header;
