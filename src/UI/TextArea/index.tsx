import styled from 'styled-components';
import Colors from '../Theme/Colors';

const Textarea = styled.textarea<{ rows?: number }>`
  height: ${({ rows }) => (rows && rows > 1 ? `${rows * 38}px` : '38px')};
  flex: 1 0 auto;
  padding: 8px 12px;
  font-size: 1rem;
  resize: none;
  background-color: ${Colors.TidaOpacity};
  border: none;
  border-radius: 4px;
  transition: 200ms;
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
    outline: transparent;
    border: none;
    box-shadow: 0 0 1px 1px ${Colors.ScarletHover};
    ::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    transition: 200ms;
    color: ${Colors.White};
    opacity: 0.3;
  }
`;

export default Textarea;
