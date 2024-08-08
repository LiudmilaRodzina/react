import { PRODUCTS_API_URL } from '../config/api';

describe('API Configuration', () => {
  test('PRODUCTS_API_URL is defined correctly', () => {
    expect(PRODUCTS_API_URL).toBeDefined();
    expect(PRODUCTS_API_URL).toEqual('https://dummyjson.com/');
  });
});
