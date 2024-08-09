import { render, screen } from '@testing-library/react';
import Pagination from '../components/Pagination';

interface PaginationTestWrapperProps {
  totalPages: number;
  currentPage: number;
}

const testFn = () => {};

const PaginationTestWrapper = ({
  currentPage,
  totalPages,
}: PaginationTestWrapperProps) => {
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={testFn}
    />
  );
};

describe('Pagination Component', () => {
  test('renders the correct number of page buttons', () => {
    render(<PaginationTestWrapper totalPages={5} currentPage={1} />);
    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(5);
  });

  test('highlights the active page button', () => {
    render(<PaginationTestWrapper totalPages={5} currentPage={2} />);
    const activeButton = screen.getByText('2');

    expect(activeButton).toHaveClass('scale-105 font-bold');
  });
});
