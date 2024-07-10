import { CardProps } from '../interfaces/interfaces';
import { getRandomColor } from '../utils/utils';

const Card = ({ pokemon }: CardProps) => {
  const randomColorClass = getRandomColor();

  return (
    <li
      className={`flex flex-col items-center mb-1 py-4 text-center border-indigo-400 border rounded-2xl shadow-lg shadow-indigo-400/50 transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300 ${randomColorClass}`}
    >
      <div className="flex flex-col items-center">
        <img
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name} image`}
          className="w-32 h-32"
        />
        <h2 className="mb-4 text-2xl font-bold capitalize text-shadow-sm ">
          {pokemon.name}
        </h2>
      </div>
      <div>
        <p>
          <strong>Base Exp:</strong> {pokemon.base_experience}
        </p>
        <p>
          <strong>Height:</strong> {pokemon.height}
        </p>
        <div>
          <strong>Abilities:</strong>
          <ul>
            {pokemon.abilities.map((ability, abilityIndex) => (
              <li key={abilityIndex}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Card;
