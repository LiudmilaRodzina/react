import { NotificationProps } from '../interfaces/interfaces';
import Button from './Button';

const Error = ({ message, onClose }: NotificationProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-20 z-2"></div>
      <div className="relative p-6 pb-2 text-center bg-slate-50 text-xl border-fuchsia-500 border-2 rounded-2xl">
        <p className="mb-6 font-bold text-md text-shadow-sm">{message}</p>
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};

export default Error;
