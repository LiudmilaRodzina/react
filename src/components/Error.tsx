import { NotificationProps } from '../interfaces/interfaces';
import Button from './Button';

const Error = ({ message, onClose }: NotificationProps) => {
  return (
    <div className="flex justify-center items-center fixed inset-0">
      <div className="fixed inset-0 bg-indigo-100 opacity-60 z-2"></div>
      <div className="relative p-8 text-center text-2xl text-indigo-900 bg-indigo-50 border rounded-lg shadow-md shadow-indigo-300/60">
        <p className="mb-6 font-bold text-md">{message}</p>
        <Button onClick={onClose} className="w-40">
          Close
        </Button>
      </div>
    </div>
  );
};

export default Error;
