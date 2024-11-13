import PropTypes from 'prop-types';

function Favorites({ favorites }) {
  return (
    <div className="mt-4">
      {/* <h2 className="text-2xl font-bold mb-4">Favorites</h2> */}
      <ul>
        {favorites.map((book, index) => (
          <li key={index} className="border p-2 rounded">
            <h3>{book.title}</h3>
            <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Prop types validation
Favorites.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author_name: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default Favorites;
