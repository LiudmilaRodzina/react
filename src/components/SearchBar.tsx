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
      className="flex flex-wrap items-center justify-center"
    >
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleInputChange(e.target.value)}
        className="p-2 px-8 mr-4 mb-2 bg-slate-50 text-xl border-fuchsia-500 border-2 rounded-3xl focus:outline-none focus:ring-2 focus:border-fuchsia-500 transition ease-in-out hover:scale-105 duration-300 shadow-lg shadow-indigo-400/50"
      />

      <button
        type="submit"
        className="p-2 px-8 mb-2 text-xl font-bold bg-fuchsia-400 border-indigo-500 border-2 rounded-3xl shadow-md hover:bg-teal-500 active:bg-indigo-500 transition ease-in-out hover:scale-105 active:scale-100 duration-300 shadow-lg shadow-indigo-400/50 text-shadow-sm"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
