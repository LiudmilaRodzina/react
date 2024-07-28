import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <div className="header flex justify-center items-center w-full p-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl text-center font-bold text-shadow-lg">
          Discover New Products!
        </h1>
      </div>{' '}
      <ThemeToggle />
    </div>
  );
};

export default Header;
