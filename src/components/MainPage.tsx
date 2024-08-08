import { MainPageProps, Product } from '@/interfaces/interfaces';
import Pagination from './Pagination';
import ProductList from './ProductList';
import ProductDetailsView from './ProductDetailsView';
import Error from './Error';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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

  const [searchQuery, setSearchQuery] = useSearch('');

  const {
    filteredProductList,
    error,
    setError,
    handleSearch,
    setCurrentPage,
    totalPages,
  } = useProducts(initialCurrentPage, totalProducts, searchQuery);

  useEffect(() => {
    const savedQuery = localStorage.getItem('searchQuery');
    if (savedQuery) {
      setSearchQuery(savedQuery);
    }
  }, []);

  useEffect(() => {
    if (router.query.page) {
      setCurrentPage(Number(router.query.page));
    }
  }, [router.query.page, setCurrentPage]);

  const handleItemClick = (product: Product) => {
    setDetails(product);
    const detailsUrl = `/?page=${router.query.page}&details=${product.id}&query=${searchQuery}`;
    router.push(detailsUrl, undefined, { shallow: true });
  };

  const handleCloseDetails = () => {
    setDetails(null);
    const pageUrl = `/?page=${router.query.page}&query=${searchQuery}`;
    router.push(pageUrl, undefined, { shallow: true });
  };

  const handleLeftSectionClick = (event: React.MouseEvent) => {
    if (details && event.currentTarget === event.target) {
      handleCloseDetails();
    }
  };

  const handlePageChange = async (page: number) => {
    await router.push(`/?page=${page}&query=${searchQuery}`, undefined, {
      shallow: true,
    });
    setCurrentPage(page);
  };

  const handleSelect = (product: Product) => {
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
    router.push(`/?page=1`, undefined, { shallow: true });
  };

  return (
    <div className="flex flex-col min-h-screen max-w-screen-xl m-auto">
      <div className="flex-1 p-4 relative">
        <SearchBar
          onSearch={async (input) => {
            if (input.trim() === '') {
              handleClearSearch();
            } else {
              setSearchQuery(input);
              await router.push(`/?page=1&query=${input}`, undefined, {
                shallow: true,
              });
              handleSearch(input);
            }
          }}
          searchQuery={searchQuery}
        />
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
              currentPage={Number(router.query.page) || initialCurrentPage}
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
