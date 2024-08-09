import Page404 from './../pages/404';
import { render, screen } from '@testing-library/react';

describe('NotFoundPage', () => {
  it('renders correctly', () => {
    render(<Page404 />);

    const headingElement = screen.getByText(/404 - Page Not Found/i);
    expect(headingElement).toBeInTheDocument();

    const errorMessageElement = screen.getByText(
      /Sorry, the page you are looking for does not exist/i
    );
    expect(errorMessageElement).toBeInTheDocument();

    const linkElement = screen.getByRole('link', {
      name: /go back to the homepage/i,
    });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
