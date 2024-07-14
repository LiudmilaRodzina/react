import { render, screen } from '@testing-library/react';
import MainPage from './../pages/MainPage';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders MainPage component correctly', async () => {
  render(
    <Router>
      <MainPage />
    </Router>
  );

  const mainHeading = await screen.findByText(/Discover New Products!/i);
  expect(mainHeading).toBeInTheDocument();
});
