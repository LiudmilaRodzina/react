import { describe, it, expect } from 'vitest';
import { PRODUCTS_PER_PAGE, ERROR_MESSAGES } from './../constants/constants';

describe('Constants', () => {
  it('should have the correct PRODUCTS_PER_PAGE value', () => {
    expect(PRODUCTS_PER_PAGE).toBe(12);
  });

  it('should have the correct error messages', () => {
    expect(ERROR_MESSAGES.fetch).toBe('Failed to fetch products.');
    expect(ERROR_MESSAGES.noResults).toBe(
      'No products found matching your search criteria'
    );
  });
});
