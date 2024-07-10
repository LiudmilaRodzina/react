import { useState, useEffect } from 'react';
import { POKEAPI_URL } from './config/api';
import Card from './components/Card';
import Error from './components/Error';
import Loader from './components/Loader';
import SearchBar from './components/SearchBar';
import { PokemonDetails, Pokemon } from './interfaces/interfaces';

const App = () => {
  const [pokemonDetailsList, setPokemonDetailsList] = useState<
    PokemonDetails[]
  >([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [filteredPokemonDetailsList, setFilteredPokemonDetailsList] = useState<
    PokemonDetails[]
  >([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(POKEAPI_URL);
        const data = await response.json();
        const promises = data.results.map((pokemon: Pokemon) =>
          fetchPokemonDetails(pokemon)
        );
        const details = await Promise.all(promises);
        setPokemonDetailsList(details);
        setFilteredPokemonDetailsList(details);
      } catch (error) {
        setError('Error fetching Pokémons. Please try again later');
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  const fetchPokemonDetails = async (pokemon: Pokemon) => {
    try {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return data;
    } catch (error) {
      setError(`Error fetching details for ${pokemon.name}`);
    }
  };

  const handleCloseError = () => {
    setError(null);
  };

  const handleSearch = (input: string) => {
    const filteredData = pokemonDetailsList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(input.toLowerCase().trim())
    );
    setFilteredPokemonDetailsList(filteredData);
    if (filteredData.length === 0) {
      setError('No Pokémon found matching your search criteria');
    }
    if (input === '') return;
  };

  return (
    <div className="flex flex-col min-h-screen max-w-screen-lg mx-auto p-2">
      <section className="p-6 pb-0">
        <h1 className="mb-8 mt-2 text-4xl sm:text-5xl md:text-6xl text-center font-bold text-indigo-700 text-shadow-lg">
          Gotta catch 'em all!
        </h1>
        <SearchBar onSearch={handleSearch} />
      </section>

      <section className="flex-1 p-4">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Loader loading={loading} />
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-4 list-none sm:grid-cols-2 md:grid-cols-3">
            {filteredPokemonDetailsList.map((pokemon, index) => (
              <Card key={index} pokemon={pokemon} />
            ))}
          </ul>
        )}
      </section>

      {error && <Error message={error} onClose={handleCloseError} />}
    </div>
  );
};

export default App;
