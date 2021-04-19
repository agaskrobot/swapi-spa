const SELECTED_EPISODE = 'EPISODE_SELECTED_EPISODE';
const LOAD_EPISODE_LIST = 'EPISODE_LOAD_EPISODE_LIST';
const SELECTED_SORT_BY = 'EPISODE_SELECTED_SORT_BY';

const actions = {
  SELECTED_EPISODE,
  SELECTED_SORT_BY,
  LOAD_EPISODE_LIST,

  selectedEpisode: (episode) => ({ type: SELECTED_EPISODE, payload: { episode } }),
  selectedSortBy: (sortBy) => ({ type: SELECTED_SORT_BY, payload: { sortBy } }),
  loadTable: (episodes) => ({ type: LOAD_EPISODE_LIST, payload: { episodes } })
};

export default actions;
