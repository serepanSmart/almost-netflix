import styled from 'styled-components';
import Colors from '../Theme/Colors';

const Textarea = styled.textarea<{ rows?: number }>`
  height: ${({ rows }) => (rows && rows > 1 ? `${rows * 38}px` : '38px')};
  flex: 1 0 auto;
  padding: 8px 12px;
  resize: none;
  background-color: ${Colors.TidaOpacity};
  border: none;
  border-radius: 4px;
  transition: all 100ms;
  -moz-appearance: none;
  -webkit-appearance: none;
  &[disabled] {
    background-color: ${Colors.Tide};
    color: ${Colors.White};
    cursor: not-allowed;
  }
  &[readonly] {
    cursor: not-allowed;
    background-color: ${Colors.Tide};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 1px 1px ${Colors.ScarletHover};
  }
  &::placeholder {
    color: ${Colors.White} !important;
  }
`;

export default Textarea;