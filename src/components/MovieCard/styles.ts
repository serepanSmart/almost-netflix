import styled, { keyframes } from 'styled-components';
import { Col } from 'styled-bootstrap-grid';
import { Colors } from '@/UI';

const show = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Card = styled(Col)`
position: relative;
display: flex;
flex-direction: column;
max-width: 30%;
margin-bottom: 40px;
cursor: pointer;
animation: ${show} 400ms ease-in-out;
  h3 {
    display: inline-block;
    margin-bottom: 10px;
  }

  img {
    flex-grow: 1;
    max-height: 400px;
    object-position: top;
    object-fit: cover;
  }
  a {
    * {
      color: ${Colors.White};
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 10px;
  right: 25px;
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