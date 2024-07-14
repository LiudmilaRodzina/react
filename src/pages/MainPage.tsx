import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { PRODUCTS_API_URL } from '../config/api';
import useProducts from './../hooks/useProducts';
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
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [, setSearchQuery] = useSearch('');
  const [error, setError] = useState<string | null>(null);

  const getPageNumberFromUrl = useCallback(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get('page') || '1', 10);
    return isNaN(page) ? 1 : page;
  }, [location.search]);

  const [currentPage, setCurrentPage] = useState(getPageNumberFromUrl());

  const { productList, loading, totalProducts } = useProducts(
    currentPage,
    productsPerPage
  );

  useEffect(() => {
    setFilteredProductList(productList);
  }, [productList]);

  const handleCloseError = () => {
    setError(null);
  };

  const handleSearch = (input: string) => {
    setSearchQuery(input);
    const filteredData = productList.filter((product) =>
      product.title.toLowerCase().includes(input.toLowerCase().trim())
    );
    setFilteredProductList(filteredData);

    if (filteredData.length === 0) {
      setError('No products found matching your search criteria');
    } else {
      setError(null);
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    navigate(`?page=${newPage}`);
  };

  const handleItemClick = async (product: Product) => {
    setDetailsLoading(true);
    try {
      const response = await fetch(`${PRODUCTS_API_URL}/${product.id}`);
      const result = await response.json();
      setDetails(result);
      navigate(`?page=${currentPage}&details=${product.id}`);
    } catch (error) {
      setError('Failed to fetch product details. Please try again');
    } finally {
      setDetailsLoading(false);
    }
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

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <div className="flex flex-col min-h-screen max-w-screen-xl mx-auto p-2">
      <section className="p-6 pb-0">
        <h1 className="mb-8 mt-2 text-4xl sm:text-5xl md:text-6xl text-center font-bold text-indigo-900 text-shadow-lg">
          Discover New Products!
        </h1>
        <SearchBar onSearch={handleSearch} />
      </section>

      <section className="flex-1 p-4 relative">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Loader loading={loading} />
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
                    onClick={() => handleItemClick(product)}
                    disabled={!!details}
                  />
                ))}
              </ul>
            </div>
            {details && (
              <div className="w-1/2 md:w-1/4 bg-indigo-100 p-4 pt-8 relative z-50 rounded-md">
                <Button
                  type="submit"
                  className="absolute top-4 right-2"
                  onClick={handleCloseDetails}
                >
                  <AiOutlineClose />
                </Button>
                {detailsLoading ? (
                  <Loader loading={detailsLoading} />
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
