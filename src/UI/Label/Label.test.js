import { render } from '@testing-library/react';
import Label from '.';

describe('Label component', () => {
  let component;
  beforeEach(() => {
    component = (props) =>
      render(
        <Label type='col-checkbox' required {...props}>
          Label
        </Label>,
      );
  });

  describe('Label renders', () => {
    test('should define Label component', () => {
      expect(component()).toBeDefined();
    });

    test('should be in the document', () => {
      const { getByText } = component();
      expect(getByText('Label')).toBeInTheDocument();
    });

    test('should have different styles with "type" prop', () => {
      const { getByText } = component({ type: 'col-checkbox' });
      expect(getByText('Label')).toHaveStyle('text-transform: uppercase;');
    });

    test('should have different styles with "type" prop', () => {
      const { getByText } = component({ type: 'inline-checkbox' });
      expect(getByText('Label')).toHaveStyle('display: flex');
    });
  });
});
