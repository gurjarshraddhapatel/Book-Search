// src/components/RecentSearches.js
import PropTypes from 'prop-types';

function RecentSearches({ searches, onSearch }) {
  return (
    <div className="mt-lg-5  px-lg-5 container">
      <h2 className=" recent ">Recent Searches</h2>
      <ul className='recent-ul'>
        {searches.slice(-5).map((term, index) => (
          <li
            key={index}
            className="cursor-pointer text-blue-500"
            onClick={() => onSearch(term)}
          >
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Prop types validation
RecentSearches.propTypes = {
  searches: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default RecentSearches;
