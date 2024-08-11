import { render, screen } from '@testing-library/react';
import Page404 from '../app/not-found';
import { describe, it, expect, vi } from 'vitest';

vi.mock('./../components/Header', () => {
  return {
    default: () => <div>Header</div>,
  };
});

describe('Page404 Component', () => {
  it('renders without crashing', () => {
    render(<Page404 />);

    expect(screen.getByText('Header')).toBeInTheDocument();

    expect(screen.getByText('404 - Page Not Found')).toBeInTheDocument();

    expect(
      screen.getByText('Sorry, the page you are looking for does not exist')
    ).toBeInTheDocument();

    expect(screen.getByText('Go back to the homepage')).toBeInTheDocument();
  });
});
