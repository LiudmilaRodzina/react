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
      className={`${className} p-2 px-8 mr-4 mb-2 bg-indigo-200 text-2xl text-indigo-900 rounded-xl shadow-md shadow-indigo-800/60 focus:outline-none focus:ring-2 focus:border-indigo-800 transition ease-in-out hover:scale-105 duration-300`}
    ></input>
  );
};

export default Input;
