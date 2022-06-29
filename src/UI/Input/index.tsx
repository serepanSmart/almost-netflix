import styled from 'styled-components';
import Colors from '../Theme/Colors';

const Input = styled.input<{ margin?: 'left' | 'right' }>`
  min-height: 45px;
  flex: 1 0 auto;
  font-size: 1rem;
  padding: 0 17px;
  color: ${Colors.White};
  font-weight: 300;
  background: ${Colors.TidaOpacity};
  border: none;
  border-radius: 4px;
  transition: 200ms;
  cursor: text;
  ${({ margin }) => margin === 'left' && 'margin-left: 30px;'}
  ${({ margin }) => margin === 'right' && 'margin-right: 30px;'}
  
  ::placeholder {
    color: ${Colors.White};
    opacity: 0.3;
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
  &[disabled] {
    background-color: ${Colors.Tide};
    color: ${Colors.White};
    cursor: not-allowed;
  }
`;

export default Input;
