import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Select from '.';

const OPTIONS = [
  { label: 'strawberry', value: 'strawberry' },
  { label: 'mango', value: 'mango' },
  { label: 'apple', value: 'apple' },
];

describe('Select component', () => {
  let component;
  beforeEach(() => {
    component = (props) => render(<Select options={OPTIONS} {...props} />);
  });

  describe('Select renders', () => {
    test('should define Select component', () => {
      expect(component()).toBeDefined();
    });

    test('Select be in the document', () => {
      const { getByRole } = component({ isMulti: false });
      expect(getByRole('combobox')).toBeInTheDocument();
    });

    test('Should render options', async () => {
      const { getByLabelText } = component({
        menuIsOpen: true,
      });
      expect(getByLabelText('strawberry')).toBeInTheDocument();
      expect(getByLabelText('mango')).toBeInTheDocument();
      expect(getByLabelText('apple')).toBeInTheDocument();
    });
  });
});
