import styled from 'styled-components';
import BannerIng from '@/assets/banner.png';

const Wrapper = styled.div`
position: relative;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: url(${BannerIng});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background: rgba(0,0,0, 0.8);
  }

  h1 {;
    font-weight: bold;
  }

 * {
   z-index: 1;
 }

 img {
   width: 75%;
   height: 100%;
 }
`;

export default Wrapper;