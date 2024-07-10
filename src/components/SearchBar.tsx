import { useState, useEffect } from 'react';
import Input from './Input';
import Button from './Button';

const SearchBar = ({ onSearch }: { onSearch: (input: string) => void }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    const savedSearchQuery = localStorage.getItem('searchQuery');

    if (savedSearchQuery) {
      setInput(savedSearchQuery);
    } else setInput('');
  }, []);

  const handleInputChange = (input: string) => {
    setInput(input);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input);

    localStorage.setItem('searchQuery', input);
  };

  return (
    <form
      onSubmit={handleInputSubmit}
      className="flex flex-wrap items-center justify-center"
    >
      <Input value={input} onChange={handleInputChange}></Input>
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchBar;
