import React from 'react';
import ButtonContainer  from './styles';

export interface IButtonProps {
  value: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type: 'button' | 'submit' | 'reset';
  opacity?: boolean;
  theme?: 'primary' | 'light' | 'reject';
}

const Button: React.FC<IButtonProps> = ({
  value,
  onClick,
  type = 'button',
  theme = 'primary'
}) => {
  return (
    <ButtonContainer
      type={type}
      onClick={onClick}
      theme={theme}
    >
      {value}
    </ButtonContainer>
  );
};

export default Button;