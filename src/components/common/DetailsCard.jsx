import PropTypes from 'prop-types';
import { CardItem } from './CardItem';

export function DetailsCard({ episode }) {
  const date = new Date(episode.release_date);
  return (
    <div className="flex group flex-col justify-between mt-6 p-5 m-10 text-xs sm:text-base w-64 sm:w-96 md:w-100 h-auto text-gray-700 bg-white rounded-lg shadow-lg">
      <h1 className="flex text-xl font-normal text-yellow-600 w-full justify-center mb-5">{episode.title}</h1>
      <CardItem label="Release Date:" value={date.toDateString()} />
      <CardItem label="Director:" value={episode.director} />
      <CardItem label="Producer:" value={episode.producer} />
      <div className="w-full my-2">
        <p className="flex w-28 mr-4 font-light text-yellow-600">Opening Crawl:</p>
        <p>{episode.opening_crawl}</p>
      </div>
    </div>
  );
}

DetailsCard.propTypes = {
  episode: PropTypes.object.isRequired
};
