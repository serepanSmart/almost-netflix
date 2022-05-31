import Colors from '../Theme/Colors';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 25px auto;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    border: 4px solid ${Colors.White};
    opacity: 1;
    border-radius: 50%;
    animation: ${spin} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      &:nth-child(2) {
        animation-delay: -0.5s;
      }
  }
`;

export default LoaderContainer;
