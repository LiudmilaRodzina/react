import { ButtonProps } from '../interfaces/interfaces';

const Button = ({
  type = 'button',
  onClick,
  className = '',
  children,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${className} pt-3 py-2 text-2xl font-bold bg-indigo-200 rounded-lg shadow-lg shadow-indigo-300/60 text-shadow-sm transition ease-in-out duration-300 hover:bg-indigo-900 hover:scale-105 hover:text-indigo-100 active:scale-100`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
