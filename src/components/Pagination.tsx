import { PaginationProps } from '../interfaces/interfaces';
import Button from './Button';

const Pagination = ({
  currentPage,
  totalPages,
  disabled,
  onPageChange,
}: PaginationProps) => {
  return (
    <div
      className={`flex flex-wrap justify-center m-4 ${
        disabled ? 'pointer-events-none opacity-50' : ''
      }`}
    >
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const isActive = currentPage === page;

        return (
          <Button
            key={page}
            className={`size-7 pt-1 md:size-11 m-1 text-base transition hover:scale-105 active:scale-100 ${
              isActive ? 'scale-105 font-bold' : ''
            }`}
            onClick={() => onPageChange(page)}
            style={{
              backgroundColor: isActive
                ? 'var(--pagination-active-bg-color)'
                : 'var(--pagination-bg-color)',
              color: isActive
                ? 'var(--pagination-active-text-color)'
                : 'inherit',
            }}
          >
            {page}
          </Button>
        );
      })}
    </div>
  );
};

export default Pagination;
