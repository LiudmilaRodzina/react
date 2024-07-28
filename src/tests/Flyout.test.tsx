import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Flyout from '../components/Flyout';
import { FlyoutProps } from '../interfaces/interfaces';
import { generateCSVUrl } from '../utils/csvUtils';

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
        title: 'Product 1',
        price: 10,
        description: '',
        images: [],
        category: '',
        brand: '',
        rating: '',
        shippingInformation: '',
        warrantyInformation: '',
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

  it('revokes the URL after download', async () => {
    const fakeUrl = 'blob:http://example.com/fake-url';
    mockGenerateCSVUrl.mockReturnValue(fakeUrl);

    render(<Flyout {...props} />);

    const downloadButton = screen.getByText('Download');
    fireEvent.click(downloadButton);

    await waitFor(() => {
      expect(mockRevokeObjectURL).toHaveBeenCalledWith(fakeUrl);
    });
  });
});
