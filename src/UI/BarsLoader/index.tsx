import React from 'react';
import styled, { keyframes } from 'styled-components';
import Colors from '../Theme/Colors';

export interface IBarsLoader {
  bgColor?: string;
}

const Wrapper = styled.div`
  display: flex;
`;

const loading = keyframes`
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1, 1.8);
  }
  40% {
    transform: scale(1);
  }
`;

export const Bar = styled.div<IBarsLoader>`
  display: inline-block;
  width: 4px;
  height: 18px;
  border-radius: 4px;
  margin: 0 2px;
  animation: ${loading} 1s ease-in-out infinite;
  &:nth-child(1) {
  background-color: ${({ bgColor }) => bgColor};
  animation-delay: 0;
}
&:nth-child(2) {
  background-color: ${({ bgColor }) => bgColor};
  animation-delay: 0.09s;
}
&:nth-child(3) {
  background-color: ${({ bgColor }) => bgColor};
  animation-delay: .18s;
}
&:nth-child(4) {
  background-color: ${({ bgColor }) => bgColor};
  animation-delay: .27s;
}
`;

const BarsLoader: React.FC<IBarsLoader> = ({
  bgColor = Colors.White,
  ...other
}) => (
  <Wrapper {...other}>
    <Bar bgColor={bgColor} />
    <Bar bgColor={bgColor} />
    <Bar bgColor={bgColor} />
    <Bar bgColor={bgColor} />
  </Wrapper>
);

export default BarsLoader;