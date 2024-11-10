// src/components/BookList.js
import PropTypes from 'prop-types';

function BookList({ books, addToFavorites }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Book Results</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <li key={book.key} className="border p-4 rounded">
            <h3 className="font-semibold">{book.title}</h3>
            <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
            <p>First Published: {book.first_publish_year || 'N/A'}</p>
            <p>Publisher: {book.publisher ? book.publisher.join(', ') : 'N/A'}</p>
            <p>ISBN: {book.isbn ? book.isbn[0] : 'N/A'}</p>
            <button
              onClick={() => addToFavorites(book)}
              className="mt-2 p-2 bg-green-500 text-white rounded"
            >
              Add to Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Prop types validation
BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author_name: PropTypes.arrayOf(PropTypes.string),
      first_publish_year: PropTypes.number,
      publisher: PropTypes.arrayOf(PropTypes.string),
      isbn: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  addToFavorites: PropTypes.func.isRequired,
};

export default BookList;
