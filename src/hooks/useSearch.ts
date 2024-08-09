import { useState, useEffect } from 'react';

const useSearch = (initialQuery: string) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    const savedQuery = localStorage.getItem('searchQuery');
    if (savedQuery) {
      setSearchQuery(savedQuery);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
  }, [searchQuery]);

  return [searchQuery, setSearchQuery] as const;
};

export default useSearch;
