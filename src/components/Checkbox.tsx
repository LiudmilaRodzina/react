import { CheckboxProps } from '../interfaces/interfaces';

const Checkbox = ({ checked, onChange, onClick }: CheckboxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label className="absolute top-4 right-4 cursor-pointer" onClick={onClick}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="sr-only"
      />
      <div
        className={`flex justify-center items-center w-8 h-8 rounded shadow-md shadow-indigo-400/30 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 ${checked ? 'bg-indigo-700 text-indigo-100' : 'bg-indigo-300'}`}
      >
        {checked && (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
    </label>
  );
};

export default Checkbox;
