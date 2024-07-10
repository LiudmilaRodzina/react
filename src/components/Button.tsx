import { ButtonProps } from '../interfaces/interfaces';

const Button = ({
  type = 'button',
  onClick,
  className,
  children,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${className} p-2 px-8 mb-2 text-xl font-bold bg-fuchsia-400 border-indigo-500 border-2 rounded-3xl shadow-md hover:bg-teal-500 active:bg-indigo-500 transition ease-in-out hover:scale-105 active:scale-100 duration-300 shadow-lg shadow-indigo-400/50 text-shadow-sm`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
