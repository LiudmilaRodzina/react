import { describe, it, expect } from 'vitest';
import { useTheme } from '../hooks/useTheme';
import { ReactNode } from 'react';
import { render } from '@testing-library/react';

type Hook = () => unknown;
type Wrapper = ({ children }: { children: ReactNode }) => JSX.Element;

const renderHook = (hook: Hook, wrapper?: Wrapper) => {
  let result: unknown;
  function TestComponent() {
    result = hook();
    return null;
  }
  const Wrapper =
    wrapper || (({ children }: { children: ReactNode }) => <>{children}</>);
  render(
    <Wrapper>
      <TestComponent />
    </Wrapper>
  );
  return { result };
};

describe('useTheme', () => {
  it('should throw an error when used outside of a ThemeProvider', () => {
    const { result } = renderHook(() => {
      try {
        useTheme();
      } catch (error) {
        return error;
      }
    });
    const errorResult = result as Error;
    expect(errorResult).toBeInstanceOf(Error);
    expect(errorResult.message).toBe('The theme context could not be found');
  });
});
