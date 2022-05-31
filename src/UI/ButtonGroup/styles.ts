import { IButtonGroup } from './index';
import styled, { css } from 'styled-components';

export const VerticalContainer = styled.div`
  margin: -5px;
  >* {
    margin: 5px;
  }
`;

interface IButtonGroupWrapper {
  styled: Pick<IButtonGroup, 'noWrap' | 'align' | 'vertical' | 'spacer'>;
}

export const Wrapper = styled.div<IButtonGroupWrapper>`
  display: ${({ styled: { align } }) => (align ? 'flex' : 'inline-flex')};
  align-items: flex-start;
  flex-wrap: ${({ styled: { noWrap } }) => !noWrap && 'wrap'};
  margin:
    ${({ styled: { spacer, vertical } }) => !spacer && !vertical && '-15px'};
  justify-content:
    ${({ styled: { align } }) => (align === 'right' ? 'flex-end' : align)};
  >* {
    margin: ${({ styled: { vertical } }) => !vertical && '15px'};
  }
  ${({ styled: { spacer, vertical } }) => spacer === 'top' && css`
    margin: ${() => (vertical ? '15px 0 0' : '10px -5px -5px')};
  `};
  ${({ styled: { spacer, vertical } }) => spacer === 'bottom' && css`
    margin: ${() => (vertical ? '0 0 15px' : '-5px -5px 10px')};
  `};
`;