import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../interfaces/interfaces';
import { PRODUCTS_API_URL } from '../config/api';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: PRODUCTS_API_URL }),
  endpoints: (builder) => ({
    fetchProducts: builder.query<
      { products: Product[]; total: number },
      { page: number; limit: number }
    >({
      query: ({ page, limit }) =>
        `products?limit=${limit}&skip=${(page - 1) * limit}`,
    }),
    fetchProductDetails: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useFetchProductsQuery, useFetchProductDetailsQuery } =
  productsApi;
