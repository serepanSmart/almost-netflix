import React from 'react';
import { StyledLabel, LabelProps } from './styles';

const Label: React.FC<LabelProps> = (
  {
    children,
    required = false,
    inline = false,
    isLoading = false,
    type,
    ...other
  },
) => (
  <StyledLabel
    styled={{
      required,
      inline,
      isLoading,
      type,
    }}
    {...other}
  >
    {children}
  </StyledLabel>
);

export default Label;