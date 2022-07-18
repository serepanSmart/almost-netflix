import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BannerContainer from './BannerContainer';
import TestWrapper from '@/TestWrapper';

const value = 'test';

describe('BannerContainer Header component', () => {
  beforeEach(() => {
    render(
      <TestWrapper>
        <BannerContainer />
      </TestWrapper>,
    );
  });
  test('render BannerContainer component', () => {
    expect(screen.getByText(/FIND YOUR MOVIE/i)).toBeInTheDocument();
  });

  describe('event handlers', () => {
    test('should handle input value', async () => {
      const input = screen.getByRole('textbox');
      expect(input.value).toBe('');
      await userEvent.type(input, value);
      expect(input.value).toBe(value);
    });
    test('should open Add Movie modal window', () => {
      userEvent.click(screen.getByText(/Add Movie/i));
      waitFor(() => expect(screen.findByRole('dialog')).toBeInTheDocument());
      waitFor(() =>
        expect(screen.findByText(/Add Movie/i)).toBeInTheDocument(),
      );
    });
    test('should prevent form submitting on "search" button click', () => {
      const sent = fireEvent.click(screen.getByText(/Search/i));
      expect(sent).toBe(false);
    });
    test('should be called with input value', async () => {
      const onSubmit = jest.fn();
      const input = screen.getByRole('textbox');
      expect(input.value).toBe('');
      await userEvent.type(input, value);
      expect(input.value).toBe(value);
      fireEvent.click(screen.getByText(/Search/i));
      waitFor(() => expect(onSubmit).toBeCalled());
      waitFor(() => expect(onSubmit).toBeCalledWith(value));
    });
  });
});
