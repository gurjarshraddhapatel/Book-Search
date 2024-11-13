import PropTypes from 'prop-types';
import './BookList.css'; // Import your CSS file here

function BookList({ books, addToFavorites }) {
  return (
    <>
    <h2 className="text-2xl font-bold mb-4 text-center mt-5">Searched Results</h2>
    <div className="bookcontainer container ">
      {books.map((book) => (
        <div key={book.key} className="book">
          <div
            className="bookpic"
            style={{
              backgroundImage: `url('./c.webp')`,
            }}
          >
            
          </div>
          <div className="bookinfo">
            <div className='detail-container'>
            <div className="title">{book.title}</div>
            <div className="author">{book.author_name ? book.author_name.join(', ') : 'Unknown'}</div>
            </div>
            <div className='main-controls'>
            <ul className="controls">
              <li className="control">
                <a href="#">
                <i className="fa-solid fa-cart-shopping"></i>

                </a>
              </li>
              <li className="control">
                <a href="#">
                <i className="fa-solid fa-download"></i>
                </a>
              </li>
              <li className="control deletebutton">
                <a onClick={() => addToFavorites(book)}>
                <i className="fa-solid fa-heart"></i>
                  <span className="invisible">Delete</span>
                </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
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
