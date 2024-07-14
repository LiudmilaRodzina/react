import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from '../components/Pagination';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';

interface PaginationTestWrapperProps {
  totalPages: number;
  currentPage: number;
}

const PaginationTestWrapper = ({
  totalPages,
  currentPage,
}: PaginationTestWrapperProps) => {
  const navigate = useNavigate();

  const onPageChange = (page: number) => {
    navigate(`?page=${page}`);
  };

  return (
    <Pagination
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={onPageChange}
    />
  );
};

describe('Pagination Component', () => {
  test('updates URL query parameter when page changes', () => {
    render(
      <Router>
        <PaginationTestWrapper totalPages={5} currentPage={1} />
      </Router>
    );
    const pageButton = screen.getByText('2');
    fireEvent.click(pageButton);
    expect(window.location.search).toContain('?page=2');
  });
});
