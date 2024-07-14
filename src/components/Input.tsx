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
      className={`${className} p-2 px-6 mr-4 mb-2 ml-4 bg-indigo-100 text-2xl text-indigo-900 rounded-xl shadow-md shadow-indigo-300/60 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-indigo-800 transition ease-in-out hover:scale-105 duration-300`}
    ></input>
  );
};

export default Input;
