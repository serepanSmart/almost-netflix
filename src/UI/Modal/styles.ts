import styled from 'styled-components';
import Colors from '../Theme/Colors';
import ReactModal from 'react-modal';
import { ModalProps } from '.';
import { X } from '@styled-icons/bootstrap';

export const StyledModal = styled(ReactModal) <{
  styled: Pick<ModalProps, 'height' | 'width'>;
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ styled: { height } }) => height};
  width: ${({ styled: { width } }) => width};
  outline: none;
  background: ${Colors.Tuna};
  box-shadow: 0 0 10px 3px rgba(0,0,0, 0.5);
  z-index: 15;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 30px auto auto;
  &.ReactModal__Content {
    transform: translate(0, -40px);
    transition: transform .3s, opacity .3s;
    opacity: 0;
    &--after-open {
      transform: translate(0, 0);
      opacity: 1;
    }
    &--before-close {
      transform: translate(0, -40px);
      opacity: 0;
      pointer-events: none;
    }
  }
`;

export const Header = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 45px 60px 0;
  position:relative;
  word-break: break-word;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  & > * {
    &:not(:last-child) {
        margin-right: 10px;
      }
  }
  & > div {
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

export const Title = styled.p`
  margin: 0;
  font-size: 2em;
  font-weight: 300;
  text-transform: uppercase;
`;

export const CloseButton = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-right: -15px;
  margin-top: -60px;
`;

export const IconClose = styled(X)`
  svg {
    fill: ${Colors.White};
  }
`;

export const ModalBodyCover = styled.div`
  padding: 30px 60px 45px;
`;

export const ModalBody = styled.div`
  margin-bottom: 45px;
`;

export const ModalFooter = styled.div`
  text-align: right;
`;