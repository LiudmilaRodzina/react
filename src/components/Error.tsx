import { Props } from '../interfaces/pokemon';

const Error = ({ message, onClose }: Props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4">
        <p className="text-red-600 text-lg">{message}</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Error;
