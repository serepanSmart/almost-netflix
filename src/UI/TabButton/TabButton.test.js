import { render, fireEvent } from '@testing-library/react';
import TabButton from '.';

const handleClick = jest.fn();
const active = false;
const disabled = false;
const value = 'TabButton';
const id = 'id';

describe('TabButton component', () => {
  let component;
  beforeEach(() => {
    component = (props) =>
      render(
        <TabButton
          active={active}
          disabled={disabled}
          onClick={handleClick}
          value={value}
          type='button'
          id={id}
          {...props}
        />,
      );
  });

  describe('TabButton render tests', () => {
    test('should define TabButton component', () => {
      expect(component()).toBeDefined();
    });

    test('should be rendered with value prop', () => {
      const { getByText } = component();
      expect(getByText(value)).toBeInTheDocument();
    });

    test('should match snapshot with default props', () => {
      expect(component()).toMatchSnapshot();
    });

    test('should have text content', () => {
      const { getByText } = component({ disabled: true });
      expect(getByText(value)).toHaveTextContent(value);
    });

    test('should have "id" attr', () => {
      const { getByRole } = component();
      expect(getByRole('button')).toHaveAttribute('id');
    });

    test('should be disabled', () => {
      const { getByText } = component({ disabled: true });
      expect(getByText(value)).toBeDisabled();
    });

  });
  describe('TabButton event handlers', () => {
    test('should call onClick prop when clicked', () => {
      const { getByText } = component();
      fireEvent.click(getByText(value));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
