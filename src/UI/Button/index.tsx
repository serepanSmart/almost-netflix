import React, { PropsWithChildren } from 'react';
import ButtonContainer  from './styles';

export interface IButtonProps {
  value?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  theme?: 'primary' | 'light' | 'reject';
  opacity?: boolean;
  icon?: boolean;
}

const Button: React.FC<PropsWithChildren<IButtonProps>> = ({
  value,
  onClick,
  type,
  theme = 'primary',
  icon,
  children,
}) => {
  return (
    <ButtonContainer
      type={type}
      onClick={onClick}
      theme={theme}
      icon={icon}
    >
      {value}
      {children}
    </ButtonContainer>
  );
};

export default Button;