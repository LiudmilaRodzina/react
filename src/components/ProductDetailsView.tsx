import React from 'react';
import Button from './Button';
import ProductDetails from './ProductDetails';
import { ProductDeatilsViewProps } from '@/interfaces/interfaces';
import { AiOutlineClose } from 'react-icons/ai';

const ProductDetailsView = ({ product, onClose }: ProductDeatilsViewProps) => {
  return (
    <>
      <div
        className="details w-full sm:w-1/2 lg:w-1/4 p-4 pt-8 rounded-md z-30"
        onClick={(event) => event.stopPropagation()}
      >
        <Button
          type="button"
          className="w-10 h-10 absolute top-4 right-2"
          onClick={onClose}
        >
          <span style={{ transform: 'scale(1.7)' }}>
            <AiOutlineClose />
          </span>
        </Button>

        <ProductDetails product={product} loading={false} />
      </div>
    </>
  );
};

export default ProductDetailsView;
