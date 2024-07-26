import { FlyoutProps } from '../interfaces/interfaces';
import Button from './Button';

const Flyout = ({ count, onClearSelectedItems }: FlyoutProps) => {
  const handleClearSelection = () => {
    onClearSelectedItems();
  };

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full p-4 bg-indigo-700 text-indigo-100 z-50">
      <div className="grid grid-cols-1 items-center max-w-7xl mx-auto gap-4 sm:grid-cols-3">
        <Button
          type="submit"
          className="justify-self-center w-32 text-sm text-indigo-800 no-text-shadow shadow-sm md:text-lg"
          onClick={() => {
            throw new Error('Download functionality not implemented');
          }}
        >
          Download
        </Button>

        <p className="justify-self-center text-center text-base text-white text-shadow-lg md:text-2xl">
          Selected items: {count}
        </p>

        <Button
          type="submit"
          className="justify-self-center w-32 text-sm text-indigo-800 no-text-shadow shadow-sm md:text-lg"
          onClick={handleClearSelection}
        >
          Unselect all
        </Button>
      </div>
    </div>
  );
};

export default Flyout;
