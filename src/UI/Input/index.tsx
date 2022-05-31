import styled, { css } from 'styled-components';
import Colors from '../Theme/Colors';

const Input = styled.input<{ margin?: 'left' | 'right' }>`
  min-height: 45px;
  flex: 1 0 auto;
  font-size: 20px;
  padding: 0 17px;
  color: ${Colors.White};
  font-weight: 300;
  background: ${Colors.TidaOpacity};
  border: none;
  border-radius: 4px;
  cursor: text;
  ${({ margin }) => margin === 'left' && css`
    margin-left: 30px;
  `}
  ${({ margin }) => margin === 'right' && css`
    margin-right: 30px;
  `}
  
  ::placeholder {
    color: ${Colors.White};
    font-weight: 300;
    transition: 200ms;
  }
  &:focus {
    outline: transparent;
    border: none;
    box-shadow: 0 0 1px 1px ${Colors.ScarletHover};
    ::placeholder {
      opacity: 0;
    }
  }
`;

export default Input;