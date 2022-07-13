import { render } from '@testing-library/react';
import ButtonGroup from '.';

describe('Label component', () => {
  let component;
  beforeEach(() => {
    component = (props) => render(<ButtonGroup {...props} />);
  });

  test('should define ButtonGroup component', () => {
    expect(component()).toBeDefined();
  });

  test('should be rendered', () => {
    const { container } = component();
    expect(container.firstChild).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    expect(component()).toMatchSnapshot();
  });

  test('should have "minus" margins', () => {
    const { container } = component({ vertical: true });
    const div = container.firstChild.querySelector('div');
    expect(div).toHaveStyle('margin: -5px');
  });

  test('should have additional space on the top', () => {
    const { container } = component({ spacer: 'top' });
    expect(container.firstChild).toHaveStyle('margin: 10px -5px -5px');
  });

  test('should have additional space on the bottom', () => {
    const { container } = component({ spacer: 'bottom' });
    expect(container.firstChild).toHaveStyle('margin: -5px -5px 10px');
  });
});
