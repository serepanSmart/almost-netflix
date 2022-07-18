import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestWrapper from '@/TestWrapper';
import TestRedux from './TestRedux';

describe('Redux testing', () => {
  beforeEach(() => {
    render(
      <TestWrapper>
        <TestRedux />
      </TestWrapper>,
    );
  });

  describe('appReducer (loader, alert) testing', () => {
    test('checks initial state, without loader and alert', () => {
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });
    test('should show and hide loader', () => {
      userEvent.click(screen.getByText('Show Loader'));
      expect(screen.findByTestId('loader')).toBeTruthy();
      userEvent.click(screen.getByText('Hide Loader'));
      expect(screen.queryByTestId('loader')).toBeFalsy();
    });
    test('should show and hide alert', () => {
      userEvent.click(screen.getByText('Show Alert'));
      expect(screen.findByRole('alert')).toBeTruthy();
      userEvent.click(screen.getByText('Hide Alert'));
      expect(screen.queryByRole('alert')).toBeFalsy();
    });
  });

  describe('getData reducer', () => {
    test('checks initial state, without movies', async () => {
      expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
      userEvent.click(screen.getByText('Get Movies'));
      expect(await screen.findByRole('listitem')).toBeInTheDocument();
      expect(await screen.findAllByRole('listitem')).toHaveLength(1);
    });
  });
});
