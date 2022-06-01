import React, { useState, useCallback } from 'react';
import {
  Modal,
  Button,
  InnerGroup,
} from '@/UI';

const ConfirmDeleteMovie: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      title="Delete Movie"
      onRequestClose={handleClose}
    >
      <Modal.Body>
        <InnerGroup>
          <h3>Are you sure you want to delete this movie?</h3>
        </InnerGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="button"
          value="Confirm"
          onClick={handleClose}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmDeleteMovie;