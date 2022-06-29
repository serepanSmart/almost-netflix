import styled from 'styled-components';
import { Row } from 'styled-bootstrap-grid';
import { Colors } from '@/UI';
import BannerImg from '@/assets/banner.png';

const Banner = styled.div`
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

const CenteredRow = styled(Row) <{ reduceSpacer?: boolean }>`
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 0 0 ${({ reduceSpacer }) => reduceSpacer ? '30px' : '75px'};
`;

const InfoWrapper = styled.div`
  margin-left: 60px;
  h1 {
    display: flex;
    align-items: center;
    font-size: 40px;
    text-transform: uppercase;
  }
  h3 {
    display: inline-block;
    font-size: 24px;
    color: ${Colors.Scarlet};
    margin: 15px 45px 15px 0;
  }
`;

const InfoImg = styled.img`
  max-height: 330px;
`;

const RatingWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 45px;
  width: 50px;
  height: 50px;
  font-size: 22px;
  border-radius: 50%;
  border: 1px solid ${Colors.White};
`;

export { Banner, CenteredRow, InfoWrapper, RatingWrapper, InfoImg };