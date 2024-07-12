import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PRODUCTS_API_URL } from './config/api';
import { Product } from './interfaces/interfaces';
import Card from './components/Card';
import Loader from './components/Loader';
import SearchBar from './components/SearchBar';
import Error from './components/Error';
import Pagination from './components/Pagination';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [productList, setProductList] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [filteredProductList, setFilteredProductList] = useState<Product[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerPage] = useState(12);

  const getPageNumberFromUrl = useCallback(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get('page') || '1', 10);
    return isNaN(page) ? 1 : page;
  }, [location.search]);

  const [currentPage, setCurrentPage] = useState(getPageNumberFromUrl());

  useEffect(() => {
    setCurrentPage(getPageNumberFromUrl());
  }, [getPageNumberFromUrl]);

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
      setFilteredProductList(result.products);
    } catch (error) {
      setError('Error fetching products. Please try again later');
    } finally {
      setLoading(false);
    }
  }, [currentPage, productsPerPage]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleCloseError = () => {
    setError(null);
  };

  const handleSearch = (input: string) => {
    const filteredData = productList.filter((product) =>
      product.title.toLowerCase().includes(input.toLowerCase().trim())
    );
    setFilteredProductList(filteredData);

    localStorage.setItem('filteredProductList', JSON.stringify(filteredData));

    filteredData.length === 0
      ? setError('No products found matching your search criteria')
      : setError(null);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    localStorage.removeItem('filteredProductList');
    navigate(`?page=${newPage}`);
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

      <section className="flex-1 p-4">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Loader loading={loading} />
          </div>
        ) : (
          <>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
            <ul className="grid grid-cols-1 gap-6 mt-2 list-none sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProductList.map((product, index) => (
                <Card key={index} product={product} />
              ))}
            </ul>
          </>
        )}
      </section>

      {error && <Error message={error} onClose={handleCloseError} />}
    </div>
  );
};

export default App;
