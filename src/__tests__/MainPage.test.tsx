import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './../store/store';
import MainPage from './../components/MainPage';
import { describe, it, expect, vi } from 'vitest';

vi.mock('next/router', () => ({
  useRouter: () => ({
    query: { page: '1' },
    push: vi.fn(),
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
  it('renders without crashing', () => {
    setup();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });
});
