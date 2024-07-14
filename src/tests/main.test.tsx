import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import React from 'react';
import App from '../App';

test('renders App component', async () => {
  const root = document.createElement('div');
  document.body.appendChild(root);

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  );
});

test('renders App component', async () => {
  render(<App />);
});
