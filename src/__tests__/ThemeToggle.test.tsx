import { render, screen, fireEvent } from '@testing-library/react';
import { useTheme } from 'next-themes';
import ThemeToggle from '../components/ThemeToggle';
import { Mock, vi } from 'vitest';

vi.mock('next-themes', () => ({
  useTheme: vi.fn(),
}));

describe('ThemeToggle', () => {
  const setThemeMock = vi.fn();

  beforeEach(() => {
    (useTheme as Mock).mockReturnValue({
      resolvedTheme: 'light',
      setTheme: setThemeMock,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the sun icon when the theme is dark', () => {
    (useTheme as Mock).mockReturnValue({
      resolvedTheme: 'dark',
      setTheme: setThemeMock,
    });

    render(<ThemeToggle />);
    const sunIcon = screen.getByTestId('sun-icon');
    expect(sunIcon).toBeInTheDocument();
  });

  it('renders the moon icon when the theme is light', () => {
    (useTheme as Mock).mockReturnValue({
      resolvedTheme: 'light',
      setTheme: setThemeMock,
    });

    render(<ThemeToggle />);
    const moonIcon = screen.getByTestId('moon-icon');
    expect(moonIcon).toBeInTheDocument();
  });

  it('toggles to light theme when sun icon is clicked', () => {
    (useTheme as Mock).mockReturnValue({
      resolvedTheme: 'dark',
      setTheme: setThemeMock,
    });

    render(<ThemeToggle />);
    const sunIcon = screen.getByTestId('sun-icon');
    fireEvent.click(sunIcon);

    expect(setThemeMock).toHaveBeenCalledWith('light');
  });

  it('toggles to dark theme when moon icon is clicked', () => {
    (useTheme as Mock).mockReturnValue({
      resolvedTheme: 'light',
      setTheme: setThemeMock,
    });

    render(<ThemeToggle />);
    const moonIcon = screen.getByTestId('moon-icon');
    fireEvent.click(moonIcon);

    expect(setThemeMock).toHaveBeenCalledWith('dark');
  });
});
