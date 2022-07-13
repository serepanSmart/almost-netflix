import { render } from '@testing-library/react';
import CardContainer from './CardContainer';
import TestWrapper from '@/TestWrapper';

describe('CardContainer Header component', () => {
  let component;
  beforeEach(() => {
    component = () =>
      render(
        <TestWrapper>
          <CardContainer />
        </TestWrapper>,
      );
  });

  describe('CardContainer render tests', () => {
    test('defined CardContainer component', () => {
      expect(component()).toBeDefined();
    });

    test('should have "reset card info" button', () => {
      const { container } = component();
      const element = container.firstChild;
      expect(element).toBeInTheDocument();
    });

    test('should have "reset card info" button', () => {
      const { getByRole } = component();
      expect(getByRole('button')).toBeInTheDocument();
    });

    test('reset button should have svg-icon', () => {
      const { container } = component();
      const icon = container.firstChild.querySelector('svg');
      expect(icon).toBeInTheDocument();
    });
  });
});
