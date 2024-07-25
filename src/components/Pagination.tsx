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
      className={`flex flex-wrap justify-center m-6 ${
        disabled ? 'pointer-events-none opacity-50' : ''
      }`}
    >
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index + 1}
          className={`m-1 w-11 h-11 text-base rounded shadow-md shadow-indigo-300/60 transition ease-in-out duration-200 hover:bg-indigo-800 hover:text-indigo-100 hover:scale-105 active:scale-100 ${
            currentPage === index + 1
              ? 'bg-indigo-700 text-indigo-100'
              : 'bg-indigo-200 text-indigo-800'
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
