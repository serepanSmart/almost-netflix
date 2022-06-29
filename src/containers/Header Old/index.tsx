import React from 'react';
import { Banner } from './styles';
import { Container } from 'styled-bootstrap-grid';
import { useMoviesContext } from '@/context';
import BannerContainer from './BannerContainer';
import CardContainer from './CardContainer';

const Header: React.FC = () => {
  const { isOpenedCard } = useMoviesContext();

  return (
    <Banner>
      <Container>
        {isOpenedCard ? <CardContainer /> : <BannerContainer />}
      </Container>
    </Banner>
  );
};

export default Header;
