import React, { useState } from 'react';

const SearchHome = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  const toggleSearchBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`search-bar ${isOpen ? 'open' : ''}`}>
      <div className="search-icon" onClick={toggleSearchBar}>
        <i className="fa fa-search"></i>
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchHome;
