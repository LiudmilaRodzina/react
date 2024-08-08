import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from './../components/ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders child components without crashing', () => {
    render(
      <ErrorBoundary>
        <div>Child Component</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });
});
