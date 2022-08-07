import styled from 'styled-components';
import Colors from '../Theme/Colors';

export const FilterItem = styled.button<{ active?: boolean }>`
  position: relative;
  padding-bottom: 22px;
  border: none;
  background: transparent;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  z-index: 2;
  color: ${({ active }) => active
    ? Colors.Scarlet
    : Colors.White};
  cursor: pointer;
  border-bottom: 2px solid ${({ active }) => active
    ? Colors.Scarlet
    : 'transparent'};
  &:hover {
    color: ${Colors.Scarlet};
  }
  &:not(:last-child) {
    margin-right: 30px;
  }
`;