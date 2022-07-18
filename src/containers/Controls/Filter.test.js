import { render, fireEvent } from '@testing-library/react';
import Filters from './Filter';
import { Colors } from '@/UI';

const filters = [
  {
    id: 'All',
    value: 'All',
    active: true,
    disabled: false,
  },
  {
    id: 'Documentary',
    value: 'Documentary',
    active: false,
    disabled: false,
  },
  {
    id: 'Comedy',
    value: 'Comedy',
    active: false,
    disabled: false,
  },
  {
    id: 'Horror',
    value: 'Horror',
    active: false,
    disabled: false,
  },
  {
    id: 'Crime',
    value: 'Crime',
    active: false,
    disabled: false,
  },
];

const onClick = jest.fn();

describe('Filter component', () => {
  let component;
  beforeEach(() => {
    component = (props) =>
      render(<Filters filters={filters} onClick={onClick} {...props} />);
  });

  describe('Genre filter render tests', () => {
    test('should define Filters component', () => {
      expect(component()).toBeDefined();
    });

    test('should match snapshot', () => {
      expect(component()).toMatchSnapshot();
    });

    test('should render 5 buttons', () => {
      const { getAllByRole } = component();
      expect(getAllByRole('button').length).toBe(5);
    });

    test('active button should have different color ', () => {
      const { getAllByRole } = component();
      expect(getAllByRole('button')[0]).toHaveStyle(`color: ${Colors.Scarlet}`);
    });
  });
  describe('Genre filter event handlers', () => {
    test('buttons should call onClick method', () => {
      const { getAllByRole } = component();
      const button = getAllByRole('button')[0];
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
