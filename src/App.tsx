import { useState, useEffect } from 'react';
import { SHOWS_API_URL } from './config/api';
import { Show } from './interfaces/interfaces';
import Card from './components/Card';
import Loader from './components/Loader';
import SearchBar from './components/SearchBar';
import Error from './components/Error';

const App = () => {
  const [showDetailsList, setShowDetailsList] = useState<Show[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [filteredShowDetailsList, setFilteredShowDetailsList] = useState<
    Show[]
  >([]);

  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);

      const data = {
        jsonrpc: '2.0',
        method: 'shows.Search',
        params: {
          query: 'a',
          limit: 20,
        },
        id: 1,
      };

      try {
        const response = await fetch(SHOWS_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'en',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        setShowDetailsList(result.result);

        const savedFilteredShowDetailsList = localStorage.getItem(
          'filteredShowDetailsList'
        );

        savedFilteredShowDetailsList
          ? setFilteredShowDetailsList(JSON.parse(savedFilteredShowDetailsList))
          : setFilteredShowDetailsList(result.result);
      } catch (error) {
        setError('Error fetching shows. Please try again later');
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  const handleCloseError = () => {
    setError(null);
  };

  const handleSearch = (input: string) => {
    const filteredData = showDetailsList.filter((show) =>
      show.title.toLowerCase().includes(input.toLowerCase().trim())
    );
    setFilteredShowDetailsList(filteredData);

    localStorage.setItem(
      'filteredShowDetailsList',
      JSON.stringify(filteredData)
    );

    filteredData.length === 0
      ? setError('No shows found matching your search criteria')
      : setError(null);
  };

  return (
    <div className="flex flex-col min-h-screen max-w-screen-xl mx-auto p-2">
      <section className="p-6 pb-0">
        <h1 className="mb-8 mt-2 text-4xl sm:text-5xl md:text-6xl text-center font-bold text-indigo-300 text-shadow-lg">
          Discover New Shows!
        </h1>
        <SearchBar onSearch={handleSearch} />
      </section>

      <section className="flex-1 p-4">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Loader loading={loading} />
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-6 mt-2 list-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredShowDetailsList.map((show, index) => (
              <Card key={index} show={show} />
            ))}
          </ul>
        )}
      </section>

      {error && <Error message={error} onClose={handleCloseError} />}
    </div>
  );
};

export default App;
