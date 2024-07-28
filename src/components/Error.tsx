import { NotificationProps } from '../interfaces/interfaces';
import Button from './Button';

const Error = ({ message, onClose }: NotificationProps) => {
  return (
    <div className="flex justify-center items-center fixed inset-0 z-50">
      <div className="fixed inset-0 bg-indigo-100 opacity-20"></div>
      <div className="modal flex flex-col items-center relative mx-2 p-8 text-center text-2xl rounded-lg">
        <p className="mb-6 font-bold text-md">{message}</p>
        <Button
          onClick={onClose}
          className="w-40 p-2 font-bold"
          style={{
            backgroundColor: 'var(--button-bg-color)',
            color: 'var(--button-text-color)',
          }}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default Error;
