import React from 'react';
import Card from './Card';
import { ProductListProps } from '@/interfaces/interfaces';

const ProductList = ({
  products,
  onItemClick,
  disabled,
  onSelect,
  onUnselect,
  selectedItems,
}: ProductListProps) => {
  return (
    <>
      <ul className="grid grid-cols-1 gap-6 mt-2 list-none sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            onClick={() => {
              onItemClick(product);
            }}
            disabled={disabled}
            isSelected={selectedItems.some((item) => item.id === product.id)}
            onSelect={() => onSelect(product)}
            onUnselect={() => onUnselect(product.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default ProductList;
