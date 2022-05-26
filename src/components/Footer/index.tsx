import React from 'react';
import FooterContainer from './styles';

type Props = {
  children?: React.ReactNode;
};

const Footer: React.FC<Props> = ({
  children
}) => (
  <FooterContainer>
    {children}
  </FooterContainer>
);

export default Footer;
