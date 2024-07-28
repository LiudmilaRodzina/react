import { ButtonProps } from '../interfaces/interfaces';

const Button = ({
  type = 'button',
  children,
  className = '',
  onClick,
  style,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button flex justify-center items-center rounded-lg transition hover:scale-105 ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
