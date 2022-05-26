import styled from 'styled-components';
import { Row } from 'styled-bootstrap-grid';
import BannerImg from '@/assets/banner.png';

const Banner = styled.header`
  position: relative;
  min-height: 396px;
  margin-bottom: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
  background: url(${BannerImg});
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
  * {
    position: relative;
    z-index: 1;
  }
`;

const CenteredRow = styled(Row)`
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 0 0 75px;
`;

export { Banner, CenteredRow };