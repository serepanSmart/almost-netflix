import React from 'react';
import { ChildrenProps } from '@/types';
import FooterContainer from './styles';

const Footer: React.FC<ChildrenProps> = ({ children }) => (
  <FooterContainer>{children}</FooterContainer>
);

export default Footer;
