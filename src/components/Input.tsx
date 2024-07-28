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
      className={`${className} input p-1 px-4 sm:px-4 sm:p-2 mx-4 text-xl border rounded-lg transition focus:outline-none hover:scale-105`}
    />
  );
};

export default Input;
