/* eslint-disable max-len */
import styled, { css } from 'styled-components';
import { IAlert } from '.';
import Colors from '../Theme/Colors';

export const CloseButton = styled.button`
  position: absolute;
  cursor:pointer;
  top: 0;
  bottom: 0;
  right: 15px;
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
  margin: auto;
  padding: 3px;
`;

export const Message = styled.p`
  margin: 0;
`;

export const Title = styled.div`
  margin-bottom: 5px;
  font-size: 16px;
`;

export const Body = styled.div`
`;

export const Icon = styled.div`
  position: absolute;
  top: 15px;
  left: 25px;
  width: 25px;
`;

interface IWrapper {
  styled: Pick<IAlert, 'type' | 'onClose'>;
}

export const Wrapper = styled.div<IWrapper>`
  position: fixed;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  min-height: 45px;
  width: 100%;
  max-width: 1000px;
  padding: ${({ styled: { onClose } }) => (onClose ? '15px 45px 15px 60px' : '15px 15px 15px 60px')};
  color: ${Colors.Tuna};
  font-weight: 500;
  border-radius: 4px;
  z-index: 9999;
  * {
    color: ${Colors.Tuna}
  }
  ${({ styled: { type } }) => type === 'success' && css`
    background-color: #eaf8dc;
  `}
  ${({ styled: { type } }) => type === 'info' && css`
    background-color: #eaf5fb;
  `}
  ${({ styled: { type } }) => type === 'warning' && css`
    background-color: #eae8e1;
  `}
  ${({ styled: { type } }) => type === 'error' && css`
    background-color: #fadad5;
  `}
`;