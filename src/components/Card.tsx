import { CardProps } from '../interfaces/interfaces';

const Card = ({ product, onClick, disabled }: CardProps) => {
  return (
    <li
      className={`flex flex-col items-center justify-between p-4 bg-indigo-50 border shadow-md rounded-xl shadow-indigo-300/60 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 ${
        disabled ? 'pointer-events-none opacity-80' : ''
      }`}
    >
      <div onClick={onClick} className="cursor-pointer">
        <div className="flex flex-col items-center">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-32 h-32 object-contain"
          />
          <h3 className="font-bold text-2xl text-indigo-900 mt-4 mb-2">
            {product.title}
          </h3>
          <p className="text-lg text-indigo-900 mt-4 mb-4 leading-6">
            {product.description}
          </p>
        </div>
      </div>
      <p className="text-indigo-600 mt-2 font-bold text-lg">${product.price}</p>
    </li>
  );
};

export default Card;
