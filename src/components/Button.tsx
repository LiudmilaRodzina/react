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
      className={`${className} p-2 px-8 mb-2 text-2xl text-indigo-950 font-bold bg-indigo-400 rounded-xl shadow-md hover:bg-indigo-500 active:bg-indigo-500 transition ease-in-out hover:scale-105 active:scale-100 duration-300 shadow-lg shadow-indigo-800/60 text-shadow-sm`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
