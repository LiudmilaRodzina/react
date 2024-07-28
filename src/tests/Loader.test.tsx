import { render } from '@testing-library/react';
import Loader from '../components/Loader';
import { ThemeProvider } from '../context/ThemeContext';

const renderWithThemeProvider = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe('Loader Component', () => {
  test('does not render loader when loading is false', () => {
    const { container } = renderWithThemeProvider(
      <Loader isLoading={false} isFetching={false} />
    );

    const loaderElement = container.querySelector('.fade-loader');
    expect(loaderElement).toBeNull();
  });
});
