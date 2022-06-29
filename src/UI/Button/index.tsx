import React, { PropsWithChildren } from 'react';
import ButtonContainer from './styles';
import BarsLoader from '../BarsLoader';

export interface IButtonProps {
  value?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  theme?: 'primary' | 'light' | 'reject';
  opacity?: boolean;
  icon?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<PropsWithChildren<IButtonProps>> = ({
  value,
  onClick,
  type,
  theme = 'primary',
  icon,
  isLoading,
  children,
}) => {
  return (
    <ButtonContainer
      type={type}
      onClick={onClick}
      theme={theme}
      icon={icon}
      isLoading={isLoading}
    >
      {isLoading && <BarsLoader />}
      {!icon && !isLoading && value}
      {icon && children}
    </ButtonContainer>
  );
};

export default Button;
