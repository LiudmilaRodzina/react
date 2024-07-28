export default MainPage;
import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen } from '@testing-library/react';
import MainPage from './../pages/MainPage';
import { ThemeProvider } from '../context/ThemeContext';

const renderWithProviders = (ui: ReactElement, options?: RenderOptions) => {
  return render(
    <Provider store={store}>
      <Router>
        <ThemeProvider>{ui}</ThemeProvider>
      </Router>
    </Provider>,
    options
  );
};

test('renders MainPage component correctly', async () => {
  renderWithProviders(<MainPage />);

  const mainHeading = await screen.findByText(/Discover New Products!/i);
  expect(mainHeading).toBeInTheDocument();
});
