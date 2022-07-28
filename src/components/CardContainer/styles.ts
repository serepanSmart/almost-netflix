import styled from 'styled-components';
import { Container } from 'styled-bootstrap-grid';
import { CenteredRow } from '@/containers/Header/styles';
import { Colors } from '@/UI';

const Wrapper = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    &:hover {
      svg {
        transition: 200ms;
        fill: ${Colors.White};
        transform: scale(1.2);
      }
    }
  }
`;

const Row = styled(CenteredRow)`
  margin: auto;
  background: ${Colors.TidaOpacity};
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0px 22px 0px ${Colors.White};
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
  flex-shrink: 0;
  margin-left: 45px;
  width: 50px;
  height: 50px;
  object-fit: initial;
  font-size: 22px;
  border-radius: 50%;
  border: 1px solid ${Colors.White};
`;

export { Wrapper, Row, InfoWrapper, RatingWrapper, InfoImg };