import Loader from '../components/Loader';
import { render, screen } from '@testing-library/react';

describe('Loader Component', () => {
  it('does not render the loader when loading is false', () => {
    render(<Loader loading={false} />);

    const loaderElement = screen.queryByRole('status');
    expect(loaderElement).not.toBeInTheDocument();
  });
});
