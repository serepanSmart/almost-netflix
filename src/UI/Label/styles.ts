import React from 'react';
import styled, { css } from 'styled-components';
import Colors from '../Theme/Colors';
import { StyledCheckbox } from '../Checkbox/styles';

export interface LabelProps
  extends Omit<React.HTMLProps<HTMLLabelElement>, 'as' | 'ref' | 'css'> {
  required?: boolean;
  type?: 'inline-checkbox' | 'single-checkbox' | 'col-checkbox';
}

export const StyledLabel = styled.label<{ styled: LabelProps }>`
  color: ${Colors['greyish-brown']};
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ styled: { required } }) => required && css`
    &:after {
      content: '*';
      display: inline-block;
      color: ${Colors.Scarlet};
      margin-left: 3px;
      width: 6px;
      margin-right: -9px;
    };
  `}
  ${({ styled: { type } }) => type === 'inline-checkbox' && css`
    display: flex;
    align-items: center;
    cursor: pointer;
      >*:first-child {
        margin-right: 10px;
    }
  `}
  ${({ styled: { type } }) => type === 'col-checkbox' && css`
    margin-bottom: 15px;
    color: ${Colors.Scarlet};
    text-transform: uppercase;
  `}
  &:hover {
    ${StyledCheckbox} {
      border-color: ${Colors.Tide};
    }
  }
`;