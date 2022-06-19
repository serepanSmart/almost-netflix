/* eslint-disable max-len */

import React from 'react';
import { CloseButton, Message, Title, Body, Icon, Wrapper } from './styles';
import {
  X,
  XOctagonFill,
  CheckCircleFill,
  ExclamationCircleFill,
} from '@styled-icons/bootstrap';
import Colors from '../Theme/Colors';

export interface IAlert {
  type: 'error' | 'warning' | 'info' | 'success';
  title?: string | React.ReactNode;
  message?: string | React.ReactNode;
  onClose?: () => void;
}

const Alert: React.FC<IAlert> = ({
  type,
  title,
  message,
  onClose,
  ...other
}) => (
  <Wrapper
    styled={{
      type,
      onClose,
    }}
    {...other}
  >
    <Icon>
      {type === 'success' && <CheckCircleFill fill="#50dc0a" />}
      {type === 'info' && <ExclamationCircleFill fill="#1384ec" />}
      {type === 'warning' && <ExclamationCircleFill fill="#f6ad52" />}
      {type === 'error' && <XOctagonFill fill={Colors.Scarlet} />}
    </Icon>
    <Body>
      {title && <Title>{title}</Title>}
      {message && <Message>{message}</Message>}
      {onClose && (
        <CloseButton onClick={onClose} type="button">
          <X size={30} />
        </CloseButton>
      )}
    </Body>
  </Wrapper>
);

export default Alert;
