import { CheckboxProps } from '../interfaces/interfaces';

const Checkbox = ({ checked, onChange, onClick }: CheckboxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  const bgColor = checked
    ? 'var(--checkbox-checked-bg-color)'
    : 'var(--checkbox-bg-color)';
  const textColor = checked ? 'var(--checkbox-checked-text-color)' : 'inherit';

  return (
    <label className="absolute top-4 right-4 cursor-pointer" onClick={onClick}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="sr-only"
      />
      <div
        className={`checkbox flex justify-center items-center size-8 rounded transition hover:-translate-y-1 hover:scale-105`}
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        {checked && (
          <svg
            className="w-7 h-7"
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
