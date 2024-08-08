import { convertToCSV, generateCSVUrl } from '../utils/csvUtils';
import { Product } from '../interfaces/interfaces';

describe('convertToCSV', () => {
  it('should convert data to CSV format', () => {
    const mockData: Product[] = [
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

    const expectedCSV =
      "Name,Price ($),Description,Details URL\nProduct,100,Description,'https://dummyjson.com/products/1";

    const result = convertToCSV(mockData);
    expect(result).toEqual(expectedCSV);
  });
});

describe('generateCSVUrl', () => {
  it('should return null for empty data', () => {
    const emptyData: Product[] = [];
    const result = generateCSVUrl(emptyData);
    expect(result).toBeNull();
  });
});
