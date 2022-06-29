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
`;

export const ControlsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;