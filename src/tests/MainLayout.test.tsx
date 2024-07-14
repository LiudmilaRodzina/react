import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

test('renders Outlet from MainLayout component', async () => {
  render(
    <Router>
      <MainLayout />
    </Router>
  );
});
