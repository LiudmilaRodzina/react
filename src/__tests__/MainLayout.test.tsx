import { render, screen } from '@testing-library/react';
import MainLayout from './../components/MainLayout';

describe('MainLayout', () => {
  it('renders Header and children', () => {
    render(
      <MainLayout>
        <div>Test Child Component</div>
      </MainLayout>
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();

    const childElement = screen.getByText(/Test Child Component/i);
    expect(childElement).toBeInTheDocument();
  });
});
