import { render, screen } from '@testing-library/react';
import ProductDetails from '../components/ProductDetails';
import { Product } from '../interfaces/interfaces';

const product: Product = {
  id: 0,
  title: 'Test Product',
  description: 'This is a test product',
  price: 100,
  images: ['test-image-url'],
  category: 'electronics',
  brand: 'Test Brand',
  rating: '4.5',
  shippingInformation: 'Free shipping',
  warrantyInformation: '2 years warranty',
  dimensions: {
    depth: 10,
    height: 20,
    width: 30,
  },
};

describe('ProductDetails Component', () => {
  test('does not render anything if product is null', () => {
    render(<ProductDetails product={null} loading={false} />);
    const loader = screen.queryByTestId('loader');
    expect(loader).not.toBeInTheDocument();
  });

  test('displays the detailed card data when product is provided', () => {
    render(<ProductDetails product={product} loading={false} />);
    const title = screen.getByText(product.title);
    expect(title).toBeInTheDocument();

    const category = screen.getByText(/Category:/);
    expect(category).toBeInTheDocument();

    const brand = screen.getByText(/Brand:/);
    expect(brand).toBeInTheDocument();
  });
});
