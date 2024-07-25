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

const MainPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
    // error: detailsError,
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

  const totalPages = data ? Math.ceil(data.total / productsPerPage) : 0;

  return (
    <div className="flex flex-col min-h-screen max-w-screen-xl m-auto">
      <section className="flex justify-center items-center w-full bg-indigo-700 p-4 shadow-md shadow-indigo-300/60">
        <div className="max-w-7xl mx-auto">
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl text-center font-bold text-indigo-100 text-shadow-lg">
            Discover New Products!
          </h1>
        </div>
      </section>

      <section className="flex-1 p-4 relative">
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
              className={`flex-1 ${details ? 'w-3/4 pr-4 blur-sm' : 'w-full'}`}
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
                  />
                ))}
              </ul>
            </div>
            {details && (
              <div className="w-1/2 md:w-1/4 bg-indigo-100 p-4 pt-8 relative z-50 rounded-md">
                <Button
                  type="button"
                  className="flex justify-center items-center absolute top-4 right-2 w-10 h-10"
                  onClick={handleCloseDetails}
                >
                  <AiOutlineClose />
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
          </div>
        )}
      </section>

      {error && <Error message={error} onClose={handleCloseError} />}
    </div>
  );
};

export default MainPage;
