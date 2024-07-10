import { Props } from '../interfaces/pokemon';

const Error = ({ message, onClose }: Props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center m-2">
      <div className="fixed inset-0 bg-black opacity-20 z-2"></div>
      <div className="relative p-6 pb-2 text-center bg-slate-50 text-xl border-fuchsia-500 border-2 rounded-3xl">
        <p className="font-bold text-md mb-6 text-shadow-sm">{message}</p>
        <button
          className="p-2 px-8 mb-2 text-xl font-bold bg-fuchsia-400 border-indigo-500 border-2 rounded-3xl shadow-md hover:bg-teal-500 active:bg-indigo-500 transition ease-in-out hover:scale-105 active:scale-100 duration-300 shadow-lg shadow-indigo-400/50 text-shadow-sm"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Error;
