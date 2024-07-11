import { Show } from '../interfaces/interfaces';

const Card = ({ show }: { show: Show }) => {
  return (
    <div
      className={`flex flex-col items-center mb-1 p-4 text-center bg-slate-900 border-indigo-800 rounded-xl shadow-md shadow-indigo-900/60 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300`}
    >
      <h2 className="mb-4 text-3xl font-bold capitalize text-shadow-sm min-h-16">
        {show.title}
      </h2>
      <img
        src={show.image}
        alt={`${show.title} image`}
        className="w-25 h-25 mb-4"
      />

      <p>
        <strong>Rating:</strong> {show.rating}
      </p>
      <p>
        <strong>Country:</strong> {show.country}
      </p>
      <p>
        <strong>Started:</strong> {show.started}
      </p>
      <p>
        <strong>Total seasons:</strong> {show.totalSeasons}
      </p>
    </div>
  );
};

export default Card;
