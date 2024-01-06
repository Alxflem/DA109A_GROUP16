import { useState } from 'react';

function SearchContainer() { 
  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching for:', searchTerm);
    // You can perform additional actions based on the search term
  };

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
      <div className="search-container">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <br/>
        <button className="btn btn-dark" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchContainer;
