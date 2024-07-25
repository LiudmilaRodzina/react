import { render } from '@testing-library/react';
import Loader from '../components/Loader';

describe('Loader Component', () => {
  test('does not render loader when loading is false', () => {
    const { container } = render(
      <Loader isLoading={false} isFetching={false} />
    );

    const loaderElement = container.querySelector('.fade-loader');
    expect(loaderElement).toBeNull();
  });
});
