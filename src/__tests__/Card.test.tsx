import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from '../components/Card';
import { Product } from '../interfaces/interfaces';

const product: Product = {
  id: 1,
  title: 'Product',
  description: 'Description',
  price: 100,
  rating: '4.5',
  brand: 'Brand',
  category: 'kitchen-accessories',
  images: ['image1-url', 'image2-url'],
  shippingInformation: 'Ships in 5-7 business days',
  warrantyInformation: '1 year warranty',
  dimensions: {
    depth: 0,
    height: 0,
    width: 0,
  },
};

describe('Card Component', () => {
  it('renders the relevant card data', () => {
    render(
      <Card
        product={product}
        onClick={() => {}}
        disabled
        isSelected
        onSelect={() => {}}
        onUnselect={() => {}}
      />
    );
    const title = screen.getByText(product.title);
    expect(title).toBeInTheDocument();
  });
});
