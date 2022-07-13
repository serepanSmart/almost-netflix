import { render } from '@testing-library/react';
import BarsLoader from '.';

const id = 'bars-loader';

describe('BarsLoader component', () => {
  let component;
  beforeEach(() => {
    component = (props) => render(<BarsLoader {...props} />);
  });

  test('should define BarsLoader component', () => {
    expect(component()).toBeDefined();
  });

  test('should be in the document', () => {
    const { getByTestId } = component();
    expect(getByTestId(id)).toBeInTheDocument();
  });

  test('should have attr "data-testid"', () => {
    const { getByTestId } = component({ dataTestId: id });
    expect(getByTestId(id)).toHaveAttribute('data-testid');
  });

  test('should match snapshot with custom color', () => {
    const bgColor = 'red';
    expect(component({ bgColor })).toMatchSnapshot();
  });
});
