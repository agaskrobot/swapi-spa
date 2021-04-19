import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getEpisodesList } from '../../api';
import { Alert, Spinner, SearchBar, ListCard, SortBy } from '../../components';

import actions from '../../redux/actions/episode';
import { sortArray } from '../../helpers';

export function Home() {
  const history = useHistory();
  const episodes = useSelector((s) => s.episode.items);
  const sortBy = useSelector((s) => s.episode.sortBy);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
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

  // useEffect sort list by selected option
  useEffect(() => {
    let sortedEpisodes = sortArray(episodes, sortBy);
    dispatch(actions.loadTable(sortedEpisodes));
  }, [sortBy]);

  // useEffect loads all episodes.
  useEffect(() => {
    setLoading(true);
    sessionStorage.removeItem('episodeId');
    dispatch(actions.selectedEpisode(null));
    getEpisodesList()
      .then((response) => dispatch(actions.loadTable(response.data.results)))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap flex-row text-xl justify-center text-sm font-extralight min-w-min px-10 w-screen">
          <Alert error={error} onClose={() => setError(null)} />
          <SearchBar episodes={episodes} onEpisodeSelect={handleEpisodeSelect} onError={setError} />
          <SortBy sortBy={sortBy} onSortByChange={handleSortByChange} />
          <div className="flex flex-col items-center w-full">
            {episodes.map((episode) => (
              <ListCard key={episode.episode_id} episode={episode} onClick={() => handleEpisodeSelect(episode)} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
