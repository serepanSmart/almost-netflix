import Checkbox from '.';
import { render, fireEvent } from '@testing-library/react';

const handleChange = jest.fn();

describe('Checkbox component', () => {
  let component;
  beforeEach(() => {
    component = (props) =>
      render(
        <Checkbox
          checked={false}
          disabled={false}
          onChange={handleChange}
          {...props}
        />,
      );
  });

  describe('Checkbox renders', () => {
    test('should define Checkbox component', () => {
      expect(component()).toBeDefined();
    });

    test('should match snapshot with default props', () => {
      expect(component()).toMatchSnapshot();
    });

    test('should be disabled with "disabled" atrr', () => {
      const { getByRole } = component({ disabled: true });
      expect(getByRole('checkbox')).toBeDisabled();
    });

    test('should be checked with "checked" atrr', () => {
      const { getByRole } = component({ checked: true });
      expect(getByRole('checkbox')).toBeChecked();
    });
  });

  describe('Checkbox events', () => {
    test('should call onChange method', () => {
      const { getByRole } = component();
      const checkbox = getByRole('checkbox');
      fireEvent.click(checkbox);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });
    test('should be checked onChange', () => {
      const { getByRole } = component();
      const checkbox = getByRole('checkbox');
      fireEvent.change(checkbox, {target: {checked: true}});
      expect(checkbox).toBeChecked();
    });
  });
});
