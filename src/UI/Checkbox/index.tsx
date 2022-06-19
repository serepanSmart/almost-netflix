import React from 'react';
import {
  CheckboxContainer,
  Icon,
  HiddenCheckbox,
  StyledCheckbox,
} from './styles';

// eslint-disable-next-line max-len
interface CheckboxProps
  extends Omit<
  React.HTMLProps<HTMLInputElement>,
  'ref' | 'as' | 'type' | 'css'
  > {
  square?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  checked,
  disabled,
  ...props
}) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox
      type="checkbox"
      checked={checked}
      disabled={disabled}
      {...props}
    />
    <StyledCheckbox
      data-test-checked={checked}
      checked={checked || false}
      disabled={disabled}
    >
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
export type { CheckboxProps };
