import { PaginationProps } from '../interfaces/interfaces';

const Pagination = ({
  totalPages,
  currentPage,
  disabled,
  onPageChange,
}: PaginationProps) => {
  return (
    <div
      className={`flex flex-wrap justify-center mb-6 ${
        disabled ? 'pointer-events-none opacity-50' : ''
      }`}
    >
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`px-4 py-2 m-1 rounded shadow-md shadow-indigo-300/60 hover:bg-indigo-500 hover:text-white transition ease-in-out hover:scale-105 active:scale-100 duration-200 ${
            currentPage === index + 1
              ? 'bg-indigo-500 text-white'
              : 'bg-indigo-200'
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
