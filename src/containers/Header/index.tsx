import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'styled-bootstrap-grid';
import { Banner } from './styles';
import BannerContainer from './BannerContainer';
import CardContainer from './CardContainer';

const Header: React.FC = () => (
  <Banner>
    <Container>
      <Routes>
        <Route path="/" element={<BannerContainer />} />
        <Route path=':id' element={<CardContainer />} />
      </Routes>
    </Container>
  </Banner>
);

export default Header;
