import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from '../components/ProductList';
import { Product } from './../interfaces/interfaces';

describe('ProductList Component', () => {
  const mockProducts: Product[] = [
    {
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
    },
  ];

  const mockOnItemClick = vi.fn();
  const mockOnSelect = vi.fn();
  const mockOnUnselect = vi.fn();

  it('renders products correctly', () => {
    render(
      <ProductList
        products={mockProducts}
        onItemClick={mockOnItemClick}
        disabled={false}
        onSelect={mockOnSelect}
        onUnselect={mockOnUnselect}
        selectedItems={[]}
      />
    );

    mockProducts.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });
  });

  it('calls onItemClick when a product is clicked', () => {
    render(
      <ProductList
        products={mockProducts}
        onItemClick={mockOnItemClick}
        disabled={false}
        onSelect={mockOnSelect}
        onUnselect={mockOnUnselect}
        selectedItems={[]}
      />
    );

    const firstProduct = screen.getByText(mockProducts[0].title);
    fireEvent.click(firstProduct);

    expect(mockOnItemClick).toHaveBeenCalledWith(mockProducts[0]);
  });
});
