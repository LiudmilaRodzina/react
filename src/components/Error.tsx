import { Props } from '../interfaces/pokemon';

const Error = ({ message, onClose }: Props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4">
        <p className="text-red-600 text-lg mb-2">{message}</p>
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white p-1 px-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Error;
