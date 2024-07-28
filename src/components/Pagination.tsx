import { PaginationProps } from '../interfaces/interfaces';
import Button from './Button';

const Pagination = ({
  totalPages,
  currentPage,
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
        const isActive = currentPage === index + 1;
        const bgColor = isActive
          ? 'var(--pagination-active-bg-color)'
          : 'var(--pagination-bg-color)';

        const textColor = isActive
          ? 'var(--pagination-active-text-color)'
          : 'inherit';

        return (
          <Button
            key={index + 1}
            className={`w-7 h-7 md:w-11 md:h-11 m-1 text-base transition hover:scale-105 active:scale-100 ${
              isActive ? 'scale-105 font-bold' : ''
            }`}
            onClick={() => onPageChange(index + 1)}
            style={{
              backgroundColor: bgColor,
              color: textColor,
            }}
          >
            {index + 1}
          </Button>
        );
      })}
    </div>
  );
};

export default Pagination;
