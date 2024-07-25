import { InputProps } from '../interfaces/interfaces';

const Input = ({
  placeholder = 'Type to search...',
  value,
  onChange,
  className = '',
}: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${className} p-2 pt-3 px-6 mx-4 bg-indigo-100 text-2xl text-indigo-900 duration-300 rounded-lg shadow-md shadow-indigo-300/60 placeholder-indigo-300 transition ease-in-outduration-300 focus:outline-none focus:ring-2 focus:border-indigo-800 hover:scale-105`}
    ></input>
  );
};

export default Input;
