import { render, screen } from '@testing-library/react';
import ProductDetails from '../components/ProductDetails';
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
