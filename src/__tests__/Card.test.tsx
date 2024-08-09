import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
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
        disabled={false}
        isSelected={false}
        onSelect={() => {}}
        onUnselect={() => {}}
      />
    );
    const title = screen.getByText(product.title);
    expect(title).toBeInTheDocument();
  });

  it('renders the product image', () => {
    render(
      <Card
        product={product}
        onClick={() => {}}
        disabled={false}
        isSelected={false}
        onSelect={() => {}}
        onUnselect={() => {}}
      />
    );
    const image = screen.getByAltText(product.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', product.images[0]);
  });

  it('renders the product description', () => {
    render(
      <Card
        product={product}
        onClick={() => {}}
        disabled={false}
        isSelected={false}
        onSelect={() => {}}
        onUnselect={() => {}}
      />
    );
    const description = screen.getByText(product.description);
    expect(description).toBeInTheDocument();
  });

  it('renders the product price', () => {
    render(
      <Card
        product={product}
        onClick={() => {}}
        disabled={false}
        isSelected={false}
        onSelect={() => {}}
        onUnselect={() => {}}
      />
    );
    const price = screen.getByText(`$${product.price}`);
    expect(price).toBeInTheDocument();
  });

  it('calls onSelect when checkbox is checked', () => {
    const onSelect = vi.fn();
    const onUnselect = vi.fn();
    render(
      <Card
        product={product}
        onClick={() => {}}
        disabled={false}
        isSelected={false}
        onSelect={onSelect}
        onUnselect={onUnselect}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(onSelect).toHaveBeenCalled();
  });

  it('calls onUnselect when checkbox is unchecked', () => {
    const onSelect = vi.fn();
    const onUnselect = vi.fn();
    render(
      <Card
        product={product}
        onClick={() => {}}
        disabled={false}
        isSelected={true}
        onSelect={onSelect}
        onUnselect={onUnselect}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(onUnselect).toHaveBeenCalled();
  });
});
