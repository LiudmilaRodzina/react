import { FlyoutProps } from '../interfaces/interfaces';
import { generateCSVUrl } from '../utils/csvUtils';
import Button from './Button';
import { useEffect, useRef, useState } from 'react';

const Flyout = ({
  count,
  onClearSelectedItems,
  selectedProducts,
}: FlyoutProps) => {
  const [csvUrl, setCsvUrl] = useState<string | null>(null);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (csvUrl && downloadLinkRef.current) {
      downloadLinkRef.current.click();
      URL.revokeObjectURL(csvUrl);
      setCsvUrl(null);
    }
  }, [csvUrl]);

  const handleDownload = () => {
    const url = generateCSVUrl(selectedProducts);
    if (url) setCsvUrl(url);
  };

  const handleClearSelection = () => {
    onClearSelectedItems();
    setCsvUrl(null);
  };

  return (
    <div className="flyout fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full p-4 z-40">
      <div className="grid grid-cols-1 items-center max-w-7xl mx-auto gap-4 sm:grid-cols-3">
        <Button
          type="button"
          className="justify-self-center w-32 p-1 font-bold sm:p-2 md:text-lg"
          onClick={handleDownload}
        >
          Download
        </Button>

        <p className="justify-self-center text-center text-base font-bold text-shadow-sm md:text-2xl">
          Selected items: {count}
        </p>

        <Button
          type="button"
          className="justify-self-center w-32 p-1 font-bold sm:p-2 md:text-lg"
          onClick={handleClearSelection}
        >
          Unselect all
        </Button>
      </div>
      {csvUrl && (
        <a
          ref={downloadLinkRef}
          href={csvUrl}
          download={
            count === 1 ? `${count}_product.csv` : `${count}_products.csv`
          }
          style={{ display: 'none' }}
        ></a>
      )}
    </div>
  );
};

export default Flyout;
