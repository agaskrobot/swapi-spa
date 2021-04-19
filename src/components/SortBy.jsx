import PropTypes from 'prop-types';
import { ReactComponent as SortIcon } from '../assets/icons/sortBy.svg';
import { Radio } from './common/Radio';

const TITLE_OPTION = 'title-option';
const DATE_OPTION = 'date-option';
const EPISODE_OPTION = 'episode-option';

export function SortBy({ sortBy, onSortByChange }) {
  return (
    <div className="flex flex-col justify-start mt-5 text-gray-200 w-64 sm:w-96 h-48 sm:h-24 bg-white rounded-lg shadow-lg p-5">
      <div className="flex mb-2 items-center w-full text-base text-yellow-600 font-light">
        <SortIcon className="w-4 h-4 mr-2" /> Sort By
      </div>
      <div className="flex flex-col sm:flex-row justify-between">
        <Radio
          id="episodeId"
          value={EPISODE_OPTION}
          checked={sortBy === EPISODE_OPTION}
          label="Episode"
          onChange={onSortByChange}
        />
        <Radio
          id="dateId"
          value={DATE_OPTION}
          checked={sortBy === DATE_OPTION}
          label="Release Date"
          onChange={onSortByChange}
        />
        <Radio
          id="titleId"
          value={TITLE_OPTION}
          checked={sortBy === TITLE_OPTION}
          label="Title A-Z"
          onChange={onSortByChange}
        />
      </div>
    </div>
  );
}

SortBy.propTypes = {
  sortBy: PropTypes.string,
  onSortByChange: PropTypes.func
};
SortBy.TITLE_OPTION = TITLE_OPTION;
SortBy.DATE_OPTION = DATE_OPTION;
SortBy.EPISODE_OPTION = EPISODE_OPTION;
