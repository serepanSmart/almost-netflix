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
  dataTestId?: string;
}

const Button: React.FC<PropsWithChildren<IButtonProps>> = ({
  value,
  onClick,
  type,
  theme = 'primary',
  icon,
  isLoading,
  dataTestId,
  children,
}) => {
  return (
    <ButtonContainer
      type={type}
      onClick={onClick}
      theme={theme}
      icon={icon}
      isLoading={isLoading}
      value={value}
      data-testid={dataTestId}
      aria-label={icon && 'button'}
    >
      {isLoading && <BarsLoader />}
      {!icon && !isLoading && value}
      {icon && children}
    </ButtonContainer>
  );
};

export default Button;
