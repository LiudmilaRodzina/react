import { useState, useEffect } from 'react';
import Card from './components/Card';
import Error from './components/Error';
import { PokemonDetails, Pokemon } from './interfaces/pokemon';
import { POKEAPI_URL } from './config/api';
import Loader from './components/Loader';

const App = () => {
  const [pokemonDetailsList, setPokemonDetailsList] = useState<
    PokemonDetails[]
  >([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

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
      } catch (error) {
        setError('Error fetching Pokémon list. Please try again later');
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

  return (
    <div className="max-w-screen-lg mx-auto">
      <section className="border border-gray-400 rounded shadow p-4 mb-4">
        <h1 className="text-3xl text-center font-bold">Pokémon List</h1>
      </section>

      <section className="border border-gray-400 rounded shadow p-4">
        <ul className="list-none">
          {loading ? (
            <Loader loading={loading} />
          ) : (
            <>
              {pokemonDetailsList.map((pokemon, index) => (
                <Card key={index} pokemon={pokemon} />
              ))}
            </>
          )}
        </ul>
      </section>

      {error && <Error message={error} onClose={handleCloseError} />}
    </div>
  );
};

export default App;
