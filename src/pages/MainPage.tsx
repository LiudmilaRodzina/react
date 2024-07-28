import { useEffect, useCallback, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import {
  useFetchProductsQuery,
  useFetchProductDetailsQuery,
} from './../services/productsApi';
import useSearch from './../hooks/useSearch';
import Card from './../components/Card';
import Error from './../components/Error';
import Loader from './../components/Loader';
import SearchBar from './../components/SearchBar';
import Button from './../components/Button';
import Pagination from './../components/Pagination';
import ProductDetails from './../components/ProductDetails';
import { Product } from './../interfaces/interfaces';
import Flyout from '../components/Flyout';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import {
  addSelectedItem,
  removeSelectedItem,
  clearSelectedItems,
} from '../store/reducers/selectedItemsSlice';

const MainPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const selectedProducts = useSelector(
    (state: RootState) => state.selectedItems.selectedItems
  );
  const [productsPerPage] = useState(12);
  const [filteredProductList, setFilteredProductList] = useState<Product[]>([]);
  const [details, setDetails] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [, setSearchQuery] = useSearch('');

  const getPageNumberFromUrl = useCallback(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get('page') || '1', 10);
    return isNaN(page) ? 1 : page;
  }, [location.search]);

  const [currentPage, setCurrentPage] = useState(getPageNumberFromUrl());

  const {
    data,
    error: fetchError,
    isLoading,
    isFetching,
  } = useFetchProductsQuery({
    page: currentPage,
    limit: productsPerPage,
  });

  const {
    data: productDetails,
    isLoading: detailsLoading,
    isFetching: detailsFetching,
  } = useFetchProductDetailsQuery(details?.id || 0, {
    skip: !details?.id,
  });

  useEffect(() => {
    if (data) {
      setFilteredProductList(data.products);
    }
  }, [data]);

  useEffect(() => {
    if (fetchError) {
      setError('Error fetching products. Please try again later');
    }
  }, [fetchError]);

  useEffect(() => {
    if (productDetails) {
      setDetails(productDetails);
    }
  }, [productDetails]);

  const handleCloseError = () => {
    setError(null);
  };

  const handleSearch = (input: string) => {
    setSearchQuery(input);
    if (data) {
      const filteredData = data.products.filter((product) =>
        product.title.toLowerCase().includes(input.toLowerCase().trim())
      );
      setFilteredProductList(filteredData);

      if (filteredData.length === 0) {
        setError('No products found matching your search criteria');
      } else {
        setError(null);
      }
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    navigate(`?page=${newPage}`);
  };

  const handleItemClick = (product: Product) => {
    setDetails(product);
    navigate(`?page=${currentPage}&details=${product.id}`);
  };

  const handleCloseDetails = () => {
    setDetails(null);
    navigate(`?page=${currentPage}`);
  };

  const handleLeftSectionClick = (event: React.MouseEvent) => {
    if (details && event.currentTarget === event.target) {
      handleCloseDetails();
    }
  };

  const handleSelectProduct = (product: Product) => {
    dispatch(addSelectedItem(product));
  };

  const handleUnselectProduct = (productId: number) => {
    dispatch(removeSelectedItem(productId));
  };

  const totalPages = data ? Math.ceil(data.total / productsPerPage) : 0;

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen max-w-screen-xl m-auto">
        <div className="flex-1 p-4 relative">
          <SearchBar onSearch={handleSearch} />
          {isLoading || isFetching ? (
            <div className="flex justify-center items-center h-full">
              <Loader isLoading={isLoading} isFetching={isFetching} />
            </div>
          ) : (
            <div className="flex relative">
              {details && (
                <div
                  className="absolute inset-0 z-30"
                  onClick={handleLeftSectionClick}
                ></div>
              )}
              <div
                className={`flex-1 flex-col ${details ? 'w-3/4 pr-4 blur-sm hidden sm:flex' : 'w-full'}`}
                onClick={handleLeftSectionClick}
              >
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                  disabled={!!details}
                />
                <ul className="grid grid-cols-1 gap-6 mt-2 list-none sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredProductList.map((product, index) => (
                    <Card
                      key={index}
                      product={product}
                      onClick={() => {
                        handleItemClick(product);
                      }}
                      disabled={!!details}
                      isSelected={selectedProducts.some(
                        (p) => p.id === product.id
                      )}
                      onSelect={() => handleSelectProduct(product)}
                      onUnselect={() => handleUnselectProduct(product.id)}
                    />
                  ))}
                </ul>
              </div>
              {details && (
                <div className="details w-full sm:w-1/2 lg:w-1/4 p-4 pt-8 rounded-md z-20">
                  <Button
                    type="button"
                    className="w-10 h-10 absolute top-4 right-2"
                    onClick={handleCloseDetails}
                  >
                    <span style={{ transform: 'scale(1.7)' }}>
                      <AiOutlineClose />
                    </span>
                  </Button>
                  {detailsLoading ? (
                    <Loader
                      isLoading={detailsLoading}
                      isFetching={detailsFetching}
                    />
                  ) : (
                    <ProductDetails product={details} loading={false} />
                  )}
                </div>
              )}
              {selectedProducts.length > 0 && (
                <Flyout
                  count={selectedProducts.length}
                  onClearSelectedItems={() => dispatch(clearSelectedItems())}
                  selectedProducts={selectedProducts}
                />
              )}
            </div>
          )}
        </div>

        {error && <Error message={error} onClose={handleCloseError} />}
      </div>
    </>
  );
};

export default MainPage;
