import styled, { css } from 'styled-components';
import Colors from '../Theme/Colors';
import { IButtonProps } from './index';

type IButtonContainer = Pick<IButtonProps, 'theme' | 'icon'>;

const ButtonContainer = styled.button<IButtonContainer>`
  display: inline-flex;
  justify-content: center;
  padding: ${({ theme }) => theme === 'light'
    ? '10px 20px'
    : '15px 60px'};
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1;
  background: ${Colors.Scarlet};
  border: 1px solid ${Colors.Scarlet};
  border-radius: 4px;
  color: ${({ theme }) => theme === 'light'
    ? Colors.Scarlet
    : Colors.White};
  cursor: pointer;
  transition: 200ms;
  &:hover {
    background-color: ${Colors.ScarletHover};
  }
  &:active {
    background-color: ${Colors.ScarletFocus};
    color: ${Colors.White};
  }
  ${({ theme }) => theme === 'light' && css`
      background: ${Colors.GreyOpacity};
      border: 1px solid ${Colors.GreyOpacity};
      &:hover {
        background: ${Colors.Scarlet};
        color: ${Colors.White};
        border-color: ${Colors.Scarlet};
      }
  `};
  ${({ theme }) => theme === 'reject' && css`
      background: ${Colors.Tuna};
      color: ${Colors.Scarlet};
      &:hover {
        background: ${Colors.Scarlet};
        color: ${Colors.White};
      }
  `};
  ${({ icon }) => !icon && 'min-width: 210px'};
  ${({ icon }) => icon && css`
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px;
      border-radius: 50%;
      background: ${Colors.Tuna};
      color: ${Colors.White};
      border-color: transparent;
      &:hover {
        background: ${Colors.Grey};
        color: ${Colors.White};
      }
      &:active {
        background: ${Colors.Tuna};
        color: ${Colors.White};
      }
  `};
`;

export default ButtonContainer;