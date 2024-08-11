'use client';

import { useState, useEffect } from 'react';
import Input from './Input';
import Button from './Button';

const SearchBar = ({
  onSearch,
  searchQuery,
}: {
  onSearch: (input: string) => void;
  searchQuery: string;
}) => {
  const [input, setInput] = useState(searchQuery);

  useEffect(() => {
    setInput(searchQuery);
  }, [searchQuery]);

  const handleInputChange = (input: string) => {
    setInput(input);
    if (!input) {
      onSearch('');
      localStorage.removeItem('searchQuery');
    }
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input.trim());
    localStorage.setItem('searchQuery', input);
  };

  return (
    <form
      onSubmit={handleInputSubmit}
      className="flex flex-wrap items-center justify-center gap-2 mb-2"
    >
      <Input value={input} onChange={handleInputChange} />
      <Button
        type="submit"
        className="w-40 p-1 pt-2 sm:p-2 sm:pt-3 font-bold text-2xl"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
