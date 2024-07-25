import { useState, useEffect } from 'react';
import Input from './Input';
import Button from './Button';

const SearchBar = ({ onSearch }: { onSearch: (input: string) => void }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    const savedSearchQuery = localStorage.getItem('searchQuery');
    savedSearchQuery ? setInput(savedSearchQuery) : setInput('');
  }, []);

  const handleInputChange = (input: string) => {
    setInput(input);
    if (!input) {
      onSearch('');
      localStorage.removeItem('searchQuery');
      localStorage.removeItem('filteredProductList');
    }
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input);

    localStorage.setItem('searchQuery', input);
  };

  return (
    <form
      onSubmit={handleInputSubmit}
      className="flex flex-wrap items-center justify-center gap-2"
    >
      <Input value={input} onChange={handleInputChange} />
      <Button type="submit" className="w-40 text-indigo-800 ">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
