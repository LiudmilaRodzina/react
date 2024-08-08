import ThemeToggle from './ThemeToggle';
import { BiSolidErrorAlt } from 'react-icons/bi';

const Header = () => {
  const triggerErrorBoundary = () => {
    throw new Error(
      'Manually triggered error (ErrorBoundary). Please reload the page'
    );
  };

  return (
    <div className="header flex justify-center items-center w-full p-4">
      <button
        className="ml-4 p-2 bg-red-500 text-indigo-50 rounded"
        onClick={triggerErrorBoundary}
      >
        <BiSolidErrorAlt />
      </button>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl text-center font-bold text-shadow-lg">
          Discover New Products!
        </h1>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Header;
