import PropTypes from 'prop-types';

import { ReactComponent as ArrowIcon } from '../../assets/icons/arrowRight.svg';
import { CardItem } from './CardItem';

export const ListCard = ({ episode, onClick }) => (
  <div
    onClick={onClick}
    className="flex group z-1 flex-col mt-6 w-64 text-sm sm:text-base sm:w-96 h-auto text-gray-100 bg-white cursor-pointer rounded-lg shadow-lg p-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
  >
    <CardItem label="Episode:" value={episode.episode_id} />
    <CardItem label="Title:" value={episode.title} />
    <CardItem label="Release Date:" value={episode.release_date} />
    <div className="flex w-full justify-end items-center text-xs group-hover:underline">
      See Details
      <ArrowIcon className="w-3 h-3 ml-2" />
    </div>
  </div>
);

ListCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  episode: PropTypes.object.isRequired
};
