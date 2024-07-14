import { useState, useEffect, useCallback } from 'react';
import { PRODUCTS_API_URL } from '../config/api';
import { Product } from '../interfaces/interfaces';

const useProducts = (currentPage: number, productsPerPage: number) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalProducts, setTotalProducts] = useState(0);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const skip = (currentPage - 1) * productsPerPage;
    try {
      const response = await fetch(
        `${PRODUCTS_API_URL}?limit=${productsPerPage}&skip=${skip}`
      );
      const result = await response.json();
      setProductList(result.products);
      setTotalProducts(result.total);
    } catch (error) {
      setError('Error fetching products. Please try again later');
    } finally {
      setLoading(false);
    }
  }, [currentPage, productsPerPage]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { productList, loading, error, totalProducts };
};

export default useProducts;
