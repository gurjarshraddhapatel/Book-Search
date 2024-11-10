// src/App.js
import  { useState } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import RecentSearches from './components/RecentSearches';
import Favorites from './components/Favorites';
import './index.css';

function App() {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${searchTerm}`);
      const data = await response.json();
      setBooks(data.docs);
      setRecentSearches([...recentSearches, searchTerm]);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const addToFavorites = (book) => {
    setFavorites([...favorites, book]);
  };

  return (
    <div className="App p-6">
      <h1 className="text-3xl font-bold mb-4">Book Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <RecentSearches searches={recentSearches} onSearch={handleSearch} />
      <BookList books={books} addToFavorites={addToFavorites} />
      <Favorites favorites={favorites} />
    </div>
  );
}

export default App;
