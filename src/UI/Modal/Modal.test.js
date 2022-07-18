import { render } from '@testing-library/react';
import { Modal, InnerGroup } from '@/UI';

const handleClose = jest.fn();

describe('Alert UI component', () => {
  let component;
  beforeEach(() => {
    component = (props) =>
      render(
        <Modal
          isModalOpened={true}
          title='Modal Title'
          onRequestClose={handleClose}
          {...props}
        >
          <Modal.Body>
            <InnerGroup>
              <h1>Modal Body</h1>
            </InnerGroup>
          </Modal.Body>
          <Modal.Footer>
            <h1>Modal Footer</h1>
          </Modal.Footer>
        </Modal>,
      );
  });
  describe('Modal renders', () => {
    test('define Modal component', () => {
      expect(component()).toBeDefined();
    });

    test('Modal should be rendered', () => {
      const { getByText } = component();
      expect(getByText(/Modal Body/i)).toBeInTheDocument();
    });

    test('Modal should have title', () => {
      const { getByText } = component();
      expect(getByText(/Modal Title/i)).toBeInTheDocument();
    });

    test('Modal should have footer', () => {
      const { getByText } = component();
      expect(getByText(/Modal Footer/i)).toBeInTheDocument();
    });
  });

  describe('Modal events', () => {
    test('Modal should be unmounted', () => {
      const { getByText, unmount, queryByText } = component();
      expect(getByText(/Modal Body/i)).toBeInTheDocument();
      unmount();
      expect(queryByText(/Modal Body/i)).not.toBeInTheDocument();
    });
  });
});
