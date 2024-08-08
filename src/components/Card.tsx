import { CardProps } from '../interfaces/interfaces';
import Checkbox from './Checkbox';

const Card = ({
  product,
  onClick,
  disabled,
  isSelected,
  onSelect,
  onUnselect,
}: CardProps) => {
  const handleCheckboxClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handleCheckboxChange = (checked: boolean) => {
    if (checked) {
      onSelect();
    } else {
      onUnselect();
    }
  };

  return (
    <li
      className={`card flex flex-col justify-between items-center relative p-4 rounded-lg transition cursor-pointer hover:-translate-y-1 hover:scale-103
        ${disabled ? 'pointer-events-none opacity-80' : ''}

      `}
      onClick={onClick}
    >
      <div className="flex flex-col items-center">
        <Checkbox
          productId={product.id}
          checked={isSelected}
          onChange={handleCheckboxChange}
          onClick={handleCheckboxClick}
        />
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-32 h-32 object-contain"
        />
        <h3 className="mt-4 mb-2 text-center font-bold text-2xl text-shadow-sm">
          {product.title}
        </h3>
        <p className="mt-4 mb-4 text-lg leading-6">{product.description}</p>
      </div>
      <p className="mt-2 font-bold text-lg text-shadow-sm">${product.price}</p>
    </li>
  );
};

export default Card;
