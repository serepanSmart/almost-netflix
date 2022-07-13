import { render, fireEvent } from '@testing-library/react';
import Input from '.';

describe('Input component', () => {
  let component;
  beforeEach(() => {
    component = (props) => render(<Input {...props} />);
  });

  describe('Input renders', () => {
    test('should define Input component', () => {
      expect(component()).toBeDefined();
    });

    test('should be in the document', () => {
      const { getByRole } = component();
      expect(getByRole('textbox')).toBeInTheDocument();
    });

    test('should have placeholder', () => {
      const { getByPlaceholderText } = component({
        placeholder: 'Placeholder',
      });
      expect(getByPlaceholderText('Placeholder')).toBeInTheDocument();
    });

    test('should be disabled', () => {
      const { getByRole } = component({ disabled: true });
      expect(getByRole('textbox')).toBeDisabled();
    });

    test('should have margin property with "margin" prop', () => {
      const { getByRole } = component({ margin: 'right' });
      expect(getByRole('textbox')).toHaveStyle('margin-right: 30px;');
    });

    test('should have margin property with "margin" prop', () => {
      const { getByRole } = component({ margin: 'left' });
      expect(getByRole('textbox')).toHaveStyle('margin-left: 30px;');
    });
  });

  describe('Input event handlers', () => {
    test('should have focus', () => {
      const { getByRole } = component();
      const input = getByRole('textbox');
      expect(input).not.toHaveFocus();
      input.focus();
      expect(input).toHaveFocus();
    });
    test('should call onChange method', () => {
      const { getByRole } = component();
      const input = getByRole('textbox');
      expect(input.value).toBe('');
      fireEvent.change(input, {target: {value: 'test'}});
      expect(input.value).toBe('test');
    });
  });
});
