import { NotificationProps } from '../interfaces/interfaces';
import Button from './Button';

const Error = ({ message, onClose }: NotificationProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-white opacity-10 z-2"></div>
      <div className="relative p-8 pb-4 text-center text-2xl text-indigo-900 bg-indigo-100 border rounded-xl shadow-md shadow-indigo-300/60">
        <p className="mb-6 font-bold text-md">{message}</p>
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};

export default Error;
