import { act, fireEvent, render, screen } from '@testing-library/react';
import MainPage from '../components/MainPage';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import StoreProvider from '../components/StoreProvider';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    query: { page: '1' },
  }),
  useSearchParams: () => ({
    get: vi.fn((key) => {
      if (key === 'page') return '1';
      return null;
    }),
  }),
}));

const setup = (props = {}) => {
  return render(
    <StoreProvider>
      <MainPage
        initialProducts={[]}
        initialCurrentPage={1}
        totalProducts={10}
        {...props}
      />
    </StoreProvider>
  );
};

describe('MainPage Component', () => {
  beforeEach(() => {
    setup();
  });

  it('renders without crashing', () => {
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });

  it('allows searching for products', async () => {
    const searchInput = screen.getByPlaceholderText(/Type to search/i);
    const searchButton = screen.getByRole('button', { name: /Search/i });

    await act(async () => {
      fireEvent.change(searchInput, { target: { value: 'test' } });
      fireEvent.click(searchButton);
    });

    expect(searchInput).toHaveValue('test');
  });
});
