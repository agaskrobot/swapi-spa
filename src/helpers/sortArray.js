import { SortBy } from '../components';

export function sortArray(array, sortBy) {
  let sortedEpisodes = [...array];
  if (sortBy === SortBy.DATE_OPTION) {
    sortedEpisodes.sort((a, b) => new Date(a['release_date']) - new Date(b['release_date']));
  } else if (sortBy === SortBy.EPISODE_OPTION) {
    sortedEpisodes.sort((a, b) => a['episode_id'] - b['episode_id']);
  } else if (sortBy === SortBy.TITLE_OPTION) {
    sortedEpisodes.sort((a, b) => {
      let nameA = a['title'].toLowerCase();
      let nameB = b['title'].toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
  return sortedEpisodes;
}
