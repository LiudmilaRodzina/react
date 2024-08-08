import { useState, useEffect } from 'react';
import { Product } from './../interfaces/interfaces';
import { PRODUCTS_PER_PAGE } from './../constants/constants';
import { ERROR_MESSAGES } from './../constants/constants';
import { PRODUCTS_API_URL } from './../config/api';

const useProducts = (
  initialCurrentPage: number,
  totalProducts: number,
  searchQuery: string
) => {
  const [filteredProductList, setFilteredProductList] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(initialCurrentPage);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = `${PRODUCTS_API_URL}products?limit=${totalProducts}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setAllProducts(data.products);
        setError(null);
      } catch {
        setError(ERROR_MESSAGES.fetch);
      }
    };

    fetchProducts();
  }, [totalProducts]);

  useEffect(() => {
    const handlePagination = () => {
      const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
      const endIndex = startIndex + PRODUCTS_PER_PAGE;

      if (searchQuery.trim()) {
        const filtered = allProducts.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setTotalPages(Math.ceil(filtered.length / PRODUCTS_PER_PAGE));
        setFilteredProductList(filtered.slice(startIndex, endIndex));
        setError(filtered.length === 0 ? ERROR_MESSAGES.noResults : null);
      } else {
        setTotalPages(Math.ceil(allProducts.length / PRODUCTS_PER_PAGE));
        setFilteredProductList(allProducts.slice(startIndex, endIndex));
        setError(null);
      }
    };

    handlePagination();
  }, [allProducts, currentPage, searchQuery]);

  const handleSearch = (input: string) => {
    const trimmedInput = input.trim();
    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(trimmedInput.toLowerCase())
    );
    setTotalPages(Math.ceil(filtered.length / PRODUCTS_PER_PAGE));
    setFilteredProductList(filtered.slice(0, PRODUCTS_PER_PAGE));
    setError(filtered.length === 0 ? ERROR_MESSAGES.noResults : null);
    setCurrentPage(1);
  };

  return {
    filteredProductList,
    error,
    handleSearch,
    setError,
    setCurrentPage,
    totalPages,
  };
};

export default useProducts;
