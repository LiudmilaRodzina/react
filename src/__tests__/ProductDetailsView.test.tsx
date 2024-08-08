import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductDetailsView from '../components/ProductDetailsView';
import { Product } from './../interfaces/interfaces';

describe('ProductDetailsView Component', () => {
  const mockProduct: Product = {
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

  const mockOnClose = vi.fn();

  it('calls onClose when close button is clicked', () => {
    render(<ProductDetailsView product={mockProduct} onClose={mockOnClose} />);

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('displays loading state correctly', () => {
    render(<ProductDetailsView product={mockProduct} onClose={mockOnClose} />);
  });
});
