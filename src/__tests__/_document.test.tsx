import { render } from '@testing-library/react';
import Document from './../pages/_document';
import { describe, it, vi } from 'vitest';

vi.mock('next/document', () => ({
  Html: ({ children }: { children: React.ReactNode }) => (
    <html>{children}</html>
  ),
  Head: ({ children }: { children: React.ReactNode }) => (
    <head>{children}</head>
  ),
  Main: () => <div>Main content</div>,
  NextScript: () => <div>Next script</div>,
}));

describe('Document component', () => {
  it('renders without crashing', () => {
    render(<Document />);
  });
});
