import { render, screen } from '@testing-library/react';
import Loading from '../app/loading';
import { describe, it, expect } from 'vitest';

describe('Loading Component', () => {
  it('does not render the loader when loading is false', () => {
    render(<Loading loading={false} />);

    const loader = screen.queryByRole('status');
    expect(loader).not.toBeInTheDocument();
  });
});
