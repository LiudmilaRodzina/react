import { render, screen, fireEvent } from '@testing-library/react';
import Error from '../components/Error';

const onCloseHandler = () => {};

const defaultProps = {
  message: 'Test error message',
  onClose: onCloseHandler,
};

test('renders error message and close button', () => {
  render(<Error {...defaultProps} />);

  const errorMessage = screen.getByText('Test error message');
  expect(errorMessage).toBeInTheDocument();

  const closeButton = screen.getByText('Close');
  expect(closeButton).toBeInTheDocument();
});

test('calls onClose callback when close button is clicked', () => {
  render(<Error {...defaultProps} />);

  const closeButton = screen.getByText('Close');
  fireEvent.click(closeButton);
});
