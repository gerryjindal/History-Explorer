import React, { useState } from 'react';

function IndependenceHistory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(searchQuery)}&origin=*`);
      const data = await response.json();
      setSearchResults(data.query.search);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
    setLoading(false);

  };
  return (
    <div> 
      <h2>Wikipedia Search</h2>
      <p>Get anthing and more </p>
      
      {/* Search input */}
      <div>
        <input className='newinput' type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button className='newsearch' onClick={handleSearch}>Search</button>
      </div>
      
      {/* Display search results */}
      {loading && <p>Loading...</p>}
      {searchResults && (
        <ul>
          {searchResults.map(result => (
            <li key={result.pageid}>
              <a className='links' href={`https://en.wikipedia.org/wiki/${result.title}`} target="_blank" rel="noopener noreferrer">{result.title}</a>
            
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


export default IndependenceHistory;




