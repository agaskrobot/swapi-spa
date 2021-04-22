import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getEpisodesList } from '../../api';
import { Alert, Spinner, SearchBar, ListCard, SortBy, Filter } from '../../components';

import actions from '../../redux/actions/episode';
import { sortArray } from '../../helpers';

export function Home() {
  const history = useHistory();
  const episodes = useSelector((s) => s.episode.items);
  const sortBy = useSelector((s) => s.episode.sortBy);
  const checked = useSelector((s) => s.episode.checked);
  const directors = useSelector((s) => s.episode.directors);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [displayEpisodes, setDisplayEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Dispatch selected episode
  const handleEpisodeSelect = (episode) => {
    dispatch(actions.selectedEpisode(episode));
    history.push(`/episode/${episode.episode_id}/details`);
  };

  // Dispatch selected sortbyOption
  const handleSortByChange = (sortBy) => {
    dispatch(actions.selectedSortBy(sortBy));
  };

  // Filter by director
  const handleFilterChange = (checked) => {
    dispatch(actions.filter(checked));
  };

  // useEffect sort list by selected option and filter by directors
  useEffect(() => {
    let filtredEpisodes = episodes.filter((episode) => checked.includes(episode.director));
    let sortedEpisodes = sortArray(filtredEpisodes, sortBy);
    setDisplayEpisodes(sortedEpisodes);
  }, [sortBy, checked]);

  // useEffect loads all episodes.
  useEffect(() => {
    sessionStorage.removeItem('episodeId');
    dispatch(actions.selectedEpisode(null));
    if (!episodes.length) {
      setLoading(true);
      getEpisodesList()
        .then((response) => {
          let sortedEpisodes = sortArray(response.data.results, SortBy.EPISODE_OPTION);
          dispatch(actions.loadTable(sortedEpisodes));
          let directors = [];
          response.data.results.map((episode) => directors.push(episode.director));
          let filteredDirectors = directors.filter((item, index) => directors.indexOf(item) === index);
          filteredDirectors.map((director) => dispatch(actions.filter(director)));
          dispatch(actions.loadDirectors(filteredDirectors));
          setDisplayEpisodes(sortedEpisodes);
        })
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap flex-row text-xl justify-center text-sm font-extralight min-w-min px-10 pb-10 w-screen">
          <Alert error={error} onClose={() => setError(null)} />
          <SearchBar episodes={episodes} onEpisodeSelect={handleEpisodeSelect} onError={setError} />
          <SortBy sortBy={sortBy} onSortByChange={handleSortByChange} />
          <Filter checked={checked} directors={directors} onCheckedChange={handleFilterChange} />
          <div className="flex flex-col items-center w-full">
            {displayEpisodes.map((episode) => (
              <ListCard key={episode.episode_id} episode={episode} onClick={() => handleEpisodeSelect(episode)} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
