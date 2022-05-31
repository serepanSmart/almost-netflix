import styled from 'styled-components';
import { Col } from 'styled-bootstrap-grid';
import { Colors } from '@/UI';

export const Card = styled(Col)`
display: flex;
flex-direction: column;
max-width: 30%;
margin-bottom: 40px;
cursor: pointer;
  h3 {
    display: inline-block;
    margin-bottom: 10px;
  }
`;

export const Caption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > span {
    display: inline-block;
    padding: 5px 8px;
    font-size: 14px;
    border: 1px solid ${Colors.White};
  }
`;