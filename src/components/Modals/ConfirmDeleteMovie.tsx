import React from 'react';
import { Modal, Button, InnerGroup, ButtonGroup } from '@/UI';
import { useModalContext } from '@/context';

const ConfirmDeleteMovie: React.FC = () => {
  const { deleteMovieHandler, movie, onRequestClose } = useModalContext();
  const handleCLose = (): void => {
    onRequestClose();
    deleteMovieHandler(movie.id);
  };

  return (
    <>
      <Modal.Body>
        <InnerGroup>
          <h3>Are you sure you want to delete this movie?</h3>
        </InnerGroup>
      </Modal.Body>
      <Modal.Footer>
        <ButtonGroup>
          <Button type='button' value='Confirm' onClick={handleCLose} />
        </ButtonGroup>
      </Modal.Footer>
    </>
  );
};

export default ConfirmDeleteMovie;
