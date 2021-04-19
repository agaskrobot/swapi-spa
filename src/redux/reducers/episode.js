import actions from '../actions/episode';
import { SortBy } from '../../components';

const INITIAL_STATE = {
  items: [],
  selected: null,
  sortBy: SortBy.EPISODE_OPTION
};

export function episode(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case actions.SELECTED_EPISODE: {
      if (payload.episode !== null) {
        sessionStorage.setItem('episodeId', payload.episode.id);
      } else {
        sessionStorage.removeItem('episodeId');
      }
      return { ...state, selected: payload.episode };
    }
    case actions.SELECTED_SORT_BY: {
      return { ...state, sortBy: payload.sortBy };
    }
    case actions.LOAD_EPISODE_LIST: {
      return { ...state, items: payload.episodes };
    }
    default:
      return state;
  }
}
