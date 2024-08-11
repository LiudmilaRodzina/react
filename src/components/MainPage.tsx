'use client';

import { MainPageProps, Product } from '@/interfaces/interfaces';
import Pagination from './Pagination';
import ProductList from './ProductList';
import ProductDetailsView from './ProductDetailsView';
import Error from './Error';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './../store/store';
import Flyout from './Flyout';
import {
  addSelectedItem,
  clearSelectedItems,
  removeSelectedItem,
} from './../store/reducers/selectedItemsSlice';
import SearchBar from './SearchBar';
import useSearch from './../hooks/useSearch';
import useProducts from './../hooks/useProducts';

const MainPage = ({ initialCurrentPage, totalProducts }: MainPageProps) => {
  const dispatch = useDispatch();
  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.selectedItems
  );
  const [details, setDetails] = useState<Product | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useSearch('');

  const { filteredProductList, error, setError, setCurrentPage, totalPages } =
    useProducts(initialCurrentPage, totalProducts, searchQuery);

  useEffect(() => {
    const savedQuery = localStorage.getItem('searchQuery');
    if (savedQuery) {
      setSearchQuery(savedQuery);
    }
  }, [setSearchQuery]);

  useEffect(() => {
    const page = searchParams.get('page');
    const detailsId = searchParams.get('details');

    if (page) {
      setCurrentPage(Number(page));
    }

    if (detailsId) {
      const selectedProduct = filteredProductList.find(
        (product) => product.id === Number(detailsId)
      );
      if (selectedProduct) {
        setDetails(selectedProduct);
      }
    }
  }, [searchParams, setCurrentPage, filteredProductList]);

  const handlePageChange = async (page: number) => {
    await router.push(`/?page=${page}&query=${searchQuery}`);
  };

  const handleItemClick = async (product: Product) => {
    setDetails(product);
    await router.push(
      `/?page=${searchParams.get('page') || 1}&details=${product.id}&query=${searchQuery}`
    );
  };

  const handleSelect = async (product: Product) => {
    dispatch(addSelectedItem(product));
  };

  const handleUnselect = (productId: number) => {
    dispatch(removeSelectedItem(productId));
  };

  const handleCloseError = () => {
    setError(null);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setCurrentPage(1);
    router.push(`/?page=1`);
  };

  const handleCloseDetails = () => {
    setDetails(null);
    const currentPage = searchParams.get('page') || 1;
    const newUrl = `/?page=${currentPage}&query=${searchQuery}`;
    router.push(newUrl);
  };

  const handleLeftSectionClick = (event: React.MouseEvent) => {
    if (details && event.currentTarget === event.target) {
      handleCloseDetails();
    }
  };

  const handleSearch = async (input: string) => {
    if (input.trim() === '') {
      handleClearSearch();
    } else {
      setSearchQuery(input);
      await router.push(`/?page=1&query=${input}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-screen-xl m-auto">
      <div className="flex-1 p-4 relative">
        <SearchBar onSearch={handleSearch} searchQuery={searchQuery} />
        <div className="flex relative">
          {details && (
            <div
              className="absolute inset-0 z-20"
              onClick={handleLeftSectionClick}
            ></div>
          )}
          <div
            className={`flex-1 flex-col ${
              details ? 'w-3/4 pr-4 blur-sm hidden sm:flex' : 'w-full'
            }`}
          >
            <Pagination
              totalPages={totalPages}
              currentPage={
                Number(searchParams.get('page')) || initialCurrentPage
              }
              onPageChange={handlePageChange}
              disabled={!!details}
            />
            <ProductList
              products={filteredProductList}
              onItemClick={handleItemClick}
              disabled={!!details}
              onSelect={handleSelect}
              onUnselect={handleUnselect}
              selectedItems={selectedItems}
            />
          </div>
          {details && (
            <ProductDetailsView
              product={details}
              onClose={handleCloseDetails}
            />
          )}
          {selectedItems.length > 0 && (
            <Flyout
              count={selectedItems.length}
              onClearSelectedItems={() => dispatch(clearSelectedItems())}
              selectedProducts={selectedItems}
            />
          )}
        </div>
      </div>
      {error && <Error message={error} onClose={handleCloseError} />}
    </div>
  );
};

export default MainPage;
