import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as SpinnerIcon } from '../assets/icons/spinner.svg';

export function SearchBar({ episodes, onEpisodeSelect }) {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const getResult = () => {
    let result = [];
    result = episodes.filter((episode) => episode.title.toLowerCase().includes(value.toLowerCase()));
    setResults(result);
    setLoading(false);
  };

  // Wait 1 sec before start searching
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      getResult();
    }, 1000);
    return () => clearTimeout(timer);
  }, [value]);

  let resultsComponent;
  if (value !== '' && loading) {
    resultsComponent = (
      <div className="flex rounded-lg w-full h-40 bg-white shadow-lg items-center justify-center">
        <SpinnerIcon className="animate-spin m-3 h-16 w-16 text-yellow-600" />
      </div>
    );
  } else if (value !== '' && results.length) {
    resultsComponent = (
      <div className="flex-col text-base font-extralight shadow-lg rounded-lg w-full h-auto p-5 bg-white text-gray-200 items-center justify-center">
        {results.map((result) => (
          <div
            onClick={() => onEpisodeSelect(result)}
            className="w-full cursor-pointer py-2 hover:text-yellow-600"
            key={result.episode_id}
          >
            {result.title}
          </div>
        ))}
      </div>
    );
  } else if (value !== '' && !results.length) {
    resultsComponent = (
      <div className="flex text-base font-extralight shadow-lg rounded-lg w-full h-40 bg-white items-center text-gray-200 justify-center">
        No results found
      </div>
    );
  }

  return (
    <div className="z-40 mt-10 w-full text-base font-extralight">
      <input
        autoComplete="off"
        className="w-full rounded-lg text-base font-extralight focus:outline-none h-10 p-2 text-gray-200"
        id="searchBar"
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {resultsComponent}
    </div>
  );
}
SearchBar.propTypes = {
  episodes: PropTypes.array,
  onEpisodeSelect: PropTypes.func
};
