import React from 'react';
import { StyledLabel, LabelProps } from './styles';

const Label: React.FC<LabelProps> = ({
  children,
  required = false,
  type,
  ...other
}) => (
  <StyledLabel
    styled={{
      required,
      type,
    }}
    {...other}
  >
    {children}
  </StyledLabel>
);

export default Label;
