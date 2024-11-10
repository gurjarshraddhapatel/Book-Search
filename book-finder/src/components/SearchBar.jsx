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
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Search for books by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded w-full"
      />
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </form>
  );
}

// Prop types validation
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
