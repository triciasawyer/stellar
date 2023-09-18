import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    // const [filterOptions, setFilterOptions] = useState({ category: '', released: '' });
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const apiUrl = '';
            const response = await axios.get(apiUrl);

            setSearchResults(response.data);
        } catch (err) {
            console.error('Error fetching search results', err);
        }
    };


useEffect(() => {
    handleSearch();
}, []);


return (
    <div>
    <div className="search-bar d-flex justify-content-center mb-3">
      <input
        type="text"
        placeholder="Search movies or series..."
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {/* Add filter options (e.g., dropdowns, checkboxes) */}
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
</div>
      {/* Display search results */}
      {searchResults.map((result) => (
        <div key={result.id}>
          {/* Display search result details */}
          <h3>{result.title}</h3>
          {/* Add more details here */}
        </div>
      ))}
    </div>
)





}

export default SearchPage;