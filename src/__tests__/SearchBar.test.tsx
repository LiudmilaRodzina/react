import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './../components/SearchBar';

const mockOnSearch = () => {};

test('saves entered value to localStorage on clicking Search button', async () => {
  render(<SearchBar onSearch={mockOnSearch} searchQuery={''} />);

  const searchInput = screen.getByPlaceholderText(
    'Type to search...'
  ) as HTMLInputElement;
  fireEvent.change(searchInput, { target: { value: 'test' } });
  fireEvent.click(screen.getByText('Search'));

  expect(localStorage.getItem('searchQuery')).toBe('test');
});

test('retrieves value from localStorage upon mounting', async () => {
  localStorage.setItem('searchQuery', 'storedValue');
  render(<SearchBar onSearch={mockOnSearch} searchQuery={'storedValue'} />);

  const searchInput = (await screen.findByPlaceholderText(
    'Type to search...'
  )) as HTMLInputElement;
  expect(searchInput.value).toBe('storedValue');
});
