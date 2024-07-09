import { useState } from 'react';

const SearchBar = ({ onSearch }: { onSearch: (input: string) => void }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (input: string) => {
    setInput(input);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form
      onSubmit={handleInputSubmit}
      className="flex items-center justify-center"
    >
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleInputChange(e.target.value)}
        className="border border-gray-400 rounded shadow-md p-1 mr-2 focus:outline-none focus:ring-2 focus:border-blue-100"
      />

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white p-1 px-2 rounded"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
