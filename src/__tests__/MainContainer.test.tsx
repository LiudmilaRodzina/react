import { render, screen } from '@testing-library/react';
import MainContainer from '../components/MainContainer';

describe('MainContainer', () => {
  it('renders Header and children', () => {
    render(
      <MainContainer>
        <div>Test Child Component</div>
      </MainContainer>
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();

    const childElement = screen.getByText(/Test Child Component/i);
    expect(childElement).toBeInTheDocument();
  });
});
