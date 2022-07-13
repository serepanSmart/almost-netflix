import { render, fireEvent } from '@testing-library/react';
import Button from '.';
import Colors from '../Theme/Colors';

const handleClick = jest.fn();
const isLoading = false;
const value = 'Button';
const type = 'submit';
const theme = 'reject';
const icon = false;

describe('Button component', () => {
  let component;
  beforeEach(() => {
    component = (props) =>
      render(
        <Button
          value={value}
          isLoading={isLoading}
          theme={theme}
          icon={icon}
          onClick={handleClick}
          type={type}
          {...props}
        />,
      );
  });

  describe('Button render tests', () => {
    test('should define Button component', () => {
      expect(component()).toBeDefined();
    });

    test('should be rendered with value prop', () => {
      const { getByText } = component();
      expect(getByText(value)).toBeInTheDocument();
    });

    test('should match snapshot with default props', () => {
      expect(component()).toMatchSnapshot();
    });

    test('should match with different types', () => {
      const { getByRole } = component({ type: 'reset' });
      expect(getByRole('button')).toBeInTheDocument();
    });

    test('should match with different types', () => {
      const { getByRole } = component({ theme: 'primary' });
      expect(getByRole('button')).toHaveStyle(`background: ${Colors.Scarlet}`);
    });

    test('should match snapshot with different themes', () => {
      const { getByRole } = component();
      expect(getByRole('button')).toBeInTheDocument();
    });

    test('should show loader component when it is loading state', () => {
      const { getByTestId, queryByText } = component({ isLoading: true });
      const loader = getByTestId('bars-loader');
      expect(loader).toBeInTheDocument();
      expect(queryByText(value)).toBeNull();
    });

    test('should show icon without value when it is "icon" prop', () => {
      const { queryByText } = component({ icon: true });
      expect(queryByText(value)).toBeNull();
    });
  });
  describe('Button event handlers', () => {
    test('should call onClick prop when clicked', () => {
      const { getByText } = component();
      fireEvent.click(getByText(value));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
