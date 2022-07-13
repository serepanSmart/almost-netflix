import Alert from '.';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const handleClick = jest.fn();

describe('Alert UI component', () => {
  let component;
  beforeEach(() => {
    component = (props) =>
      render(
        <Alert
          type='error'
          title='Test Alert'
          message='Test Message'
          onClose={handleClick}
          {...props}
        />,
      );
  });
  describe('Alert renders', () => {
    test('render Alert component', () => {
      expect(component()).toBeDefined();
    });

    test('Alert should have a title', () => {
      const { getByText } = component();
      expect(getByText(/Test Alert/i)).toBeInTheDocument();
    });

    test('Alert should have a message', () => {
      const { getByText } = component();
      expect(getByText(/Test Message/i)).toBeInTheDocument();
    });

    describe('Alert theme properties', () => {
      test('Alert type "error" should have red background', () => {
        const { getByRole } = component();
        expect(getByRole('alert')).toHaveStyle('background-color: #fadad5');
      });
      test('Alert type "warning" should have yellow background', () => {
        const { getByRole } = component({ type: 'warning' });
        expect(getByRole('alert')).toHaveStyle('background-color: #eae8e1');
      });
      test('Alert type "success" should have green background', () => {
        const { getByRole } = component({ type: 'success' });
        expect(getByRole('alert')).toHaveStyle('background-color: #eaf8dc');
      });
      test('Alert type "info" should have blue background', () => {
        const { getByRole } = component({ type: 'info' });
        expect(getByRole('alert')).toHaveStyle('background-color: #eaf5fb');
      });
      test('Alert should have dark text color', () => {
        const { getByRole } = component();
        expect(getByRole('alert')).toHaveStyle('color: #232323');
      });
      test('Alert should additioanal padding when closable', () => {
        const { getByRole } = component();
        expect(getByRole('alert')).toHaveStyle('padding: 15px 45px 15px 60px');
      });
    });
  });

  describe('Alert events', () => {
    test('should call onClick prop when clicked', () => {
      const { getByRole } = component();
      fireEvent.click(getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
