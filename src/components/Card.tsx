import { CardProps } from '../interfaces/pokemon';

const Card = ({ pokemon }: CardProps) => {
  const getRandomColor = () => {
    const colors = [
      'bg-red-200',
      'bg-red-300',
      'bg-blue-200',
      'bg-blue-300',
      'bg-green-200',
      'bg-green-300',
      'bg-yellow-200',
      'bg-yellow-300',
      'bg-purple-200',
      'bg-purple-300',
      'bg-orange-200',
      'bg-orange-300',
      'bg-teal-200',
      'bg-teal-300',
      'bg-pink-200',
      'bg-pink-300',
      'bg-indigo-200',
      'bg-indigo-300',
      'bg-lime-200',
      'bg-lime-300',
      'bg-cyan-200',
      'bg-cyan-300',
      'bg-fuchsia-200',
      'bg-fuchsia-300',
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const randomColorClass = getRandomColor();

  return (
    <li
      className={`flex flex-col items-center mb-1 py-4 text-center border-indigo-400 border rounded-2xl shadow-lg shadow-indigo-400/50 transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300 ${randomColorClass}`}
      style={{ opacity: 1 }}
    >
      <div className="flex flex-col items-center">
        <img
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name} image`}
          className="w-32 h-32"
        />
        <h2 className="mb-4 text-2xl font-bold capitalize text-shadow-sm">
          {pokemon.name}
        </h2>
      </div>
      <div>
        <div>
          <strong>Base Exp:</strong> {pokemon.base_experience}
        </div>
        <div>
          <strong>Height:</strong> {pokemon.height}
        </div>
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
