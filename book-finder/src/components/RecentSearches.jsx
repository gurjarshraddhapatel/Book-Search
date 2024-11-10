// src/components/RecentSearches.js
import PropTypes from 'prop-types';

function RecentSearches({ searches, onSearch }) {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold">Recent Searches</h2>
      <ul>
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
