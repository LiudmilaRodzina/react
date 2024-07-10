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
      className={`${className} p-2 px-8 mr-4 mb-2 bg-slate-50 text-xl border-fuchsia-500 border-2 rounded-3xl focus:outline-none focus:ring-2 focus:border-fuchsia-500 transition ease-in-out hover:scale-105 duration-300 shadow-lg shadow-indigo-400/50`}
    ></input>
  );
};

export default Input;
