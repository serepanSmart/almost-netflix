import React from 'react';
import { ChildrenProps } from '@/types';
import FooterContainer from './styles';
import { EXTERNAL_LINK } from '@/constants';

const Footer: React.FC<ChildrenProps> = () => (
  <FooterContainer>
    <EXTERNAL_LINK />
  </FooterContainer>
);

export default Footer;
