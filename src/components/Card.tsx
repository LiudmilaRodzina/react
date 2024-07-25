import { CardProps } from '../interfaces/interfaces';

const Card = ({ product, onClick, disabled }: CardProps) => {
  return (
    <li
      className={`flex flex-col justify-between items-center relative p-4 bg-indigo-50 border shadow-md rounded-lg shadow-indigo-300/60 transition ease-in-out duration-300 cursor-pointer hover:-translate-y-1 hover:scale-103 ${
        disabled ? 'pointer-events-none opacity-80' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-32 h-32 object-contain"
        />
        <h3 className="mt-4 mb-2 font-bold text-2xl text-indigo-800">
          {product.title}
        </h3>
        <p className="mt-4 mb-4 text-lg text-indigo-900 leading-6">
          {product.description}
        </p>
      </div>
      <p className="mt-2 font-bold text-lg text-indigo-600">${product.price}</p>
    </li>
  );
};

export default Card;
