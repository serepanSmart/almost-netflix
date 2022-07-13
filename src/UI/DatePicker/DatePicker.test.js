import { render, fireEvent } from '@testing-library/react';
import DatePicker from '.';

const value = '2022-07-11';

describe('Input component', () => {
  let component;
  beforeEach(() => {
    component = (props) => render(<DatePicker {...props} />);
  });

  describe('DatePicker renders', () => {
    test('DatePicker should be defined', () => {
      expect(component()).toBeDefined();
    });

    test('should be in the document', () => {
      const { container } = component();
      expect(container.firstChild).toBeInTheDocument();
    });

    test('should have placeholder', () => {
      const { getByPlaceholderText } = component({
        placeholder: 'Placeholder',
      });
      expect(getByPlaceholderText('Placeholder')).toBeInTheDocument();
    });

    test('should be rendered with value', () => {
      const { getByDisplayValue } = component({
        value,
      });
      expect(getByDisplayValue(value)).toBeInTheDocument();
    });
  });

  describe('Input event handlers', () => {
    test('should call onChange method', () => {
      const { getByRole } = component();
      const input = getByRole('textbox');
      expect(input.value).toBe('');
      fireEvent.change(input, { target: { value } });
      expect(input.value).toBe(value);
    });
  });
});
