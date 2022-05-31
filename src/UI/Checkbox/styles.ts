import styled from 'styled-components';
import Colors from '../Theme/Colors';

export const CheckboxContainer = styled.div`
  display: inline-flex;
`;

export const Icon = styled.svg`
  polyline {
    fill: none;
    stroke: ${Colors.Scarlet};
    stroke-width: 4px;
  }
`;

export const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<{
  checked: boolean; disabled?: boolean;
}>`
  user-select: none;
  display: inline-block;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  width: 16px;
  height: 16px;
  background: ${({ disabled }) => (disabled ? Colors.Tide : Colors.White)};
  border: 1px solid ${Colors.Scarlet};
  border-radius: 4px;
  transition: all 100ms;
  border-color: ${({ disabled }) => disabled && Colors.Scarlet} !important;
  &:hover {
    border-color: ${({ disabled }) => (!disabled && Colors.Tide)};
  }
  ${Icon} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;