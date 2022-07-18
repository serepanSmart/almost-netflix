import { render, fireEvent } from '@testing-library/react';
import Textarea from '.';

describe('Textarea component', () => {
  let component;
  beforeEach(() => {
    component = (props) => render(<Textarea {...props} />);
  });

  describe('Textarea renders', () => {
    test('should define Textarea component', () => {
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
    test('should have different height with "rows" prop', () => {
      const { getByRole } = component({ rows: 3 });
      expect(getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe('Input event handlers', () => {
    test('should have focus', () => {
      const { getByRole } = component();
      const textarea = getByRole('textbox');
      expect(textarea).not.toHaveFocus();
      textarea.focus();
      expect(textarea).toHaveFocus();
    });
    test('should call onChange method', () => {
      const { getByRole } = component();
      const textarea = getByRole('textbox');
      expect(textarea.value).toBe('');
      fireEvent.change(textarea, {target: {value: 'test'}});
      expect(textarea.value).toBe('test');
    });
  });
});
