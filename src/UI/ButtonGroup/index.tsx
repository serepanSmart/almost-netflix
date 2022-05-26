import React from 'react';
import { VerticalContainer, Wrapper } from './styles';

export interface IButtonGroup {
  noWrap?: boolean;
  vertical?: boolean;
  align?: string;
  spacer?: string;
  children: React.ReactNode;
}

const ButtonGroup: React.FC<IButtonGroup> = ({
  noWrap,
  vertical,
  align,
  spacer,
  children,
  ...other
}) => (
  <Wrapper
    {...other}
    styled={{
      noWrap,
      align,
      spacer,
      vertical,
    }}
  >
    {vertical ? (
      <VerticalContainer>
        {children}
      </VerticalContainer>
    ) : children}
  </Wrapper>
);

export default ButtonGroup;