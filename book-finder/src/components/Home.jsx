import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import RecentSearches from './RecentSearches';
import Favorites from './Favorites';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [initialBooks, setInitialBooks] = useState([]); // Store initial list of novels
  const [favorites, setFavorites] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  // Fetch initial books when component mounts
  useEffect(() => {
    const fetchInitialBooks = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/search.json?title=novel`);
        const data = await response.json();
        setInitialBooks(data.docs); // Set initial list of novels
      } catch (error) {
        console.error("Error fetching initial books:", error);
      }
    };

    fetchInitialBooks();
  }, []);

  const handleSearch = async (searchTerm) => {
    if (searchTerm.trim() === "") {
      setBooks(initialBooks); 
      return;
    }

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${searchTerm}`
      );
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
    <>
      <div className='main-container'>
        <div className="inner-container">
          {/* <img src="./h.webp" className='home-image' alt="" /> */}
          <div className='main-content'>
            <div className='content-container'>
                <h1 className='heading'>Lets find your next favorite book!</h1>
                <h5 className='pt-2  text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Praesentium, necessitatibus! <br /> Officia tempore quae ut aut, quia et totam ex dolores quam aliquam distinctio veritatis ad blanditiis beatae praesentium repudiandae eos?!</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="App p-6">
        <SearchBar onSearch={handleSearch} />
        <RecentSearches searches={recentSearches} onSearch={handleSearch} />
        <BookList books={books.length > 0 ? books : initialBooks} addToFavorites={addToFavorites} />
        <Favorites favorites={favorites} />
      </div>
    </>
  );
};

export default Home;
