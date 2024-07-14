import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from '../components/Card';
import { Product } from '../interfaces/interfaces';

const product: Product = {
  id: 0,
  title: 'Sample Product',
  description: 'This is a sample product.',
  price: 100,
  images: [],
  category: 'electronics',
  brand: 'Sample Brand',
  rating: '4.5',
  shippingInformation: 'Ships in 5-7 business days',
  warrantyInformation: '1 year warranty',
  dimensions: {
    depth: 10,
    height: 20,
    width: 30,
  },
};

describe('Card Component', () => {
  it('renders the relevant card data', () => {
    render(<Card product={product} onClick={() => {}} />);
    const title = screen.getByText(product.title);
    expect(title).toBeInTheDocument();
  });
});
