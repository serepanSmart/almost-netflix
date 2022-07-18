import { render } from '@testing-library/react';
import Loader from '.';
import { Colors } from '@/UI';

describe('Label component', () => {
  let component;
  beforeEach(() => {
    component = () => render(<Loader />);
  });

  describe('Label renders', () => {
    test('should define Label component', () => {
      expect(component()).toBeDefined();
    });

    test('should match snapshot', () => {
      expect(component()).toMatchSnapshot();
    });

    test('spins inside should have defined colors', () => {
      const { container } = component();
      const spins = container.firstChild.querySelectorAll('div');
      spins.forEach((spin) =>
        expect(spin).toHaveStyle(`border: 4px solid ${Colors.Scarlet}`),
      );
    });
  });
});
