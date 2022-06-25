import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, Alert } from '@/UI';
import { useModalContext } from '@/context';
import ConfirmDeleteMovie from './ConfirmDeleteMovie';
import EditMovieData from './MovieDataForm';
import { RootState } from '@/redux/rootReducer';

const ModalMovie: React.FC = () => {
  const {
    isModalOpened,
    modalTitle,
    onRequestClose,
    isDeleting,
  } = useModalContext();

  const alert = useSelector((state: RootState) => {
    return state.app.alert;
  });

  return (
    <>
      {alert && (
        <Alert
          type={alert.type}
          title={alert.title}
          message={alert.message}
        />
      )}
      <Modal
        isModalOpened={isModalOpened}
        title={modalTitle}
        onRequestClose={onRequestClose}
      >
        {isDeleting ? <ConfirmDeleteMovie /> : <EditMovieData />}
      </Modal>
    </>
  );
};

export default ModalMovie;
