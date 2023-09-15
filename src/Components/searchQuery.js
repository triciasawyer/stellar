import { useState } from 'react';

const useSearchQuery = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return { searchQuery, setSearchQuery };
};

export default useSearchQuery;
