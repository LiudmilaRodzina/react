import { PaginationProps } from '../interfaces/interfaces';

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex flex-wrap justify-center mb-6">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`px-4 py-2 m-1 rounded shadow-md shadow-indigo-300/60 ${
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
