import React, { PropsWithChildren, ReactNode } from 'react';
import ReactModal, { Props } from 'react-modal';
import {
  StyledModal,
  Header,
  Actions,
  Title,
  CloseButton,
  IconClose,
  ModalBodyCover,
  ModalBody,
  ModalFooter,
} from './styles';
import { ChildrenProps } from '@/types';

export type ModalFC<P = Record<string, unknown>> = React.FC<P> & {
  Body: React.FC<PropsWithChildren<ChildrenProps>>;
  Footer: React.FC<PropsWithChildren<ChildrenProps>>;
};

const DEFAULT_ZINDEX = 1000;
const DEFAULT_BG = 'rgba(35,35,35,0.8)';

ReactModal.setAppElement('body');
if (ReactModal.defaultStyles.overlay) {
  ReactModal.defaultStyles.overlay.zIndex = DEFAULT_ZINDEX;
  ReactModal.defaultStyles.overlay.background = DEFAULT_BG;
}

export interface ModalProps extends Props {
  title?: string | ReactNode;
  height?: string;
  width?: string;
  children?: ReactNode;
  zIndex?: number;
  shouldCloseOnOverlayClick?: boolean;
  isModalOpened: boolean;
  onRequestClose?: () => void;
}

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  children,
  title,
  height = 'auto',
  width = '975px',
  shouldCloseOnOverlayClick = true,
  isModalOpened,
  onRequestClose,
  ...props
}) => {
  return (
    <StyledModal
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      styled={{
        height,
        width,
      }}
      closeTimeoutMS={300}
      isOpen={isModalOpened}
      {...props}
    >
      <Header>
        <Title>{title && title}</Title>
        <Actions>
          <CloseButton onClick={onRequestClose} data-testid="close-button">
            <IconClose size={30} />
          </CloseButton>
        </Actions>
      </Header>
      <ModalBodyCover>{children}</ModalBodyCover>
    </StyledModal>
  );
};

const ModalMemo = React.memo(Modal);

const ModalWrapper: ModalFC<PropsWithChildren<ModalProps>> = (props) => (
  <ModalMemo {...props} />
);

ModalWrapper.Body = ModalBody;
ModalWrapper.Footer = ModalFooter;

export default ModalWrapper;
