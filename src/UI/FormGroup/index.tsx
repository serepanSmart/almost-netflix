import styled from 'styled-components';
import { Row } from 'styled-bootstrap-grid';

const FormGroup = styled(Row)`
  margin-bottom: 15px;
`;

interface IColumnProps {
  spacer?: 'top' | 'left' | 'bottom' | 'right';
  size?: 1 | 2 | 3 | 4;
  direction: 'row' | 'column';
}

const InnerCol = styled.div<IColumnProps>`
  display: flex;
  flex-direction:  ${({ direction }) => direction === 'column' && 'column'};
  ${({ size }) => size === 1 && 'width: 100%;'};
  ${({ size }) => size === 2 && 'width: calc(100% / 2);'};
  ${({ size }) => size === 3 && 'width: calc(100% / 3);'};
  ${({ size }) => size === 4 && 'width: calc(100% / 4);'};
  ${({ spacer }) => spacer === 'top' && 'margin-top: 15px;'};
  ${({ spacer }) => spacer === 'bottom' && 'margin-bottom: 15px;'};
  ${({ spacer }) => spacer === 'left' && 'margin-left: 30px;'};
  ${({ spacer }) => spacer === 'right' && 'margin-right: 30px;'};
`;

const InnerGroup = styled.div<{ disabledSpacer?: boolean }>`
  display: flex;
  justify-content: space-between;
  ${({ disabledSpacer }) => !disabledSpacer && 'margin-bottom: 15px;'}; 
`;

export { FormGroup, InnerGroup, InnerCol };