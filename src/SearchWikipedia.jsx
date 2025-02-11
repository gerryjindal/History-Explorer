import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function SearchWikipedia({ onSearchResult }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    const response = await axios.get(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${searchTerm}`
    );

    if (response.data && response.data.query && response.data.query.search) {
      onSearchResult(response.data.query.search);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Wikipedia..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchWikipedia;
