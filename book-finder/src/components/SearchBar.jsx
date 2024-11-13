// src/components/SearchBar.js
import { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
  };

  return (
   <div className="container-fluid ">
     <form onSubmit={handleSubmit} className="mb-4">
      <div className='searchBar'>
      <input
        type="text"
        placeholder="Search for books by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded w-full"
        id="searchQueryInput" 
      />
      <button type="submit" id="searchQuerySubmit" className="mt-2 px-0 bg-blue-500  rounded">
      <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      </div>
    </form>
   </div>
  );
}

// Prop types validation
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
