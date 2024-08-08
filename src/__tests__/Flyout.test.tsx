import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Flyout from '../components/Flyout';
import { FlyoutProps } from '../interfaces/interfaces';
import { generateCSVUrl } from './../utils/csvUtils';

const originalRevokeObjectURL = URL.revokeObjectURL;
const mockRevokeObjectURL = vi.fn();

beforeAll(() => {
  URL.revokeObjectURL = mockRevokeObjectURL;
});

afterAll(() => {
  URL.revokeObjectURL = originalRevokeObjectURL;
});

vi.mock('../utils/csvUtils', () => ({
  generateCSVUrl: vi.fn(),
}));

const mockGenerateCSVUrl = generateCSVUrl as jest.Mock;

describe('Flyout Component', () => {
  const props: FlyoutProps = {
    count: 3,
    onClearSelectedItems: vi.fn(),
    selectedProducts: [
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
    ],
  };

  beforeEach(() => {
    mockGenerateCSVUrl.mockClear();
    mockRevokeObjectURL.mockClear();
  });

  it('renders correctly with the correct count of selected items', () => {
    render(<Flyout {...props} />);
    expect(
      screen.getByText(`Selected items: ${props.count}`)
    ).toBeInTheDocument();
  });

  it('clears selection on button click', () => {
    render(<Flyout {...props} />);
    const unselectButton = screen.getByText('Unselect all');
    fireEvent.click(unselectButton);

    expect(props.onClearSelectedItems).toHaveBeenCalledTimes(1);
  });
});
