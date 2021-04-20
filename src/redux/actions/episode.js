const SELECTED_EPISODE = 'EPISODE_SELECTED_EPISODE';
const LOAD_EPISODE_LIST = 'EPISODE_LOAD_EPISODE_LIST';
const LOAD_DIRECTOR_LIST = 'EPISODE_LOAD_DIRECTOR_LIST';
const SELECTED_SORT_BY = 'EPISODE_SELECTED_SORT_BY';
const FILTER = 'EPISODE_FILTER';

const actions = {
  SELECTED_EPISODE,
  SELECTED_SORT_BY,
  LOAD_EPISODE_LIST,
  LOAD_DIRECTOR_LIST,
  FILTER,

  selectedEpisode: (episode) => ({ type: SELECTED_EPISODE, payload: { episode } }),
  selectedSortBy: (sortBy) => ({ type: SELECTED_SORT_BY, payload: { sortBy } }),
  filter: (checked) => ({ type: FILTER, payload: { checked } }),
  loadTable: (episodes) => ({ type: LOAD_EPISODE_LIST, payload: { episodes } }),
  loadDirectors: (directors) => ({ type: LOAD_DIRECTOR_LIST, payload: { directors } })
};

export default actions;
