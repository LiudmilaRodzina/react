import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../context/ThemeContext';
import App from '../App';
import { store } from '../store/store';

describe('Main Entry Point', () => {
  it('renders the App component without crashing', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    );
    expect(screen.getByText(/Discover New Products!/i)).toBeInTheDocument();
  });
});
