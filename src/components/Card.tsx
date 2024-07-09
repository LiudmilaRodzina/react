import { CardProps } from '../interfaces/pokemon';

const Card = ({ pokemon }: CardProps) => {
  return (
    <li className="mb-1 border border-gray-400 rounded shadow-md p-4 flex items-center text-center flex-col bg-slate-50">
      <div className="flex items-center flex-col">
        <img
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name} image`}
        />
        <h2 className="text-2xl font-bold capitalize mb-4">{pokemon.name}</h2>
      </div>
      <div>
        <div>
          <strong>Base Experience:</strong> {pokemon.base_experience}
        </div>
        <div>
          <strong>Height:</strong> {pokemon.height}
        </div>
        <div>
          <strong>Weight:</strong> {pokemon.weight}
        </div>
        <div>
          <strong>Abilities:</strong>
          <ul>
            {pokemon.abilities.map((ability, abilityIndex) => (
              <li key={abilityIndex} className="italic">
                {ability.ability.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Card;
