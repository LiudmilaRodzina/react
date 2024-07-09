import { Props } from '../interfaces/pokemon';

const Error = ({ message, onClose }: Props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white border border-gray-300 rounded shadow-md p-4 text-center">
        <p className="text-indigo-900 font-bold text-lg mb-6">{message}</p>
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-1 px-2 rounded shadow-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Error;
