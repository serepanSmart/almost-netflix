import styled from 'styled-components';
import { Colors } from '@/UI';

export const FiltersList = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0;
  position: relative;
    &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: ${Colors.Tide};
        z-index: 0;
      }
    a {
    position: relative;
    padding-bottom: 22px;
    border: none;
    background: transparent;
    font-size: 16px;
    color: ${Colors.White};
    text-transform: uppercase;
    font-weight: 600;
    z-index: 2;
    border-bottom: 2px solid transparent;
    cursor: pointer;
      &.active {
        color: ${Colors.Scarlet};
        border-color: ${Colors.Scarlet}; 
      }
      &:hover {
        color: ${Colors.Scarlet};
      }
      &:not(:last-child) {
        margin-right: 30px;
      }
    }
`;

export const ControlsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;