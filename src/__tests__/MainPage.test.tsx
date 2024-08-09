import { act, fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './../store/store';
import MainPage from './../components/MainPage';
import { describe, it, expect, vi, beforeEach } from 'vitest';

const pushMock = vi.fn();

vi.mock('next/router', () => ({
  useRouter: () => ({
    query: { page: '1' },
    push: pushMock,
  }),
}));

const setup = (props = {}) => {
  return render(
    <Provider store={store}>
      <MainPage
        initialProducts={[]}
        initialCurrentPage={1}
        totalProducts={10}
        {...props}
      />
    </Provider>
  );
};

describe('MainPage Component', () => {
  beforeEach(() => {
    pushMock.mockClear();
    setup();
  });

  it('renders without crashing', () => {
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });

  it('performs a search and updates the URL', async () => {
    const searchInput = screen.getByPlaceholderText(/Type to search/i);

    await act(async () => {
      fireEvent.change(searchInput, { target: { value: 'test' } });
      const searchButton = screen.getByRole('button', { name: /Search/i });
      fireEvent.click(searchButton);
    });

    console.log('Push mock calls:', pushMock.mock.calls);

    expect(pushMock).toHaveBeenCalledWith(
      expect.stringContaining('query=test'),
      undefined,
      { shallow: true }
    );
  });
});
