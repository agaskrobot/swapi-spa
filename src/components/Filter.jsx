import PropTypes from 'prop-types';
import { ReactComponent as FilterIcon } from '../assets/icons/filter.svg';
import { Checkbox } from './common/Checkbox';

export function Filter({ checked, directors, onCheckedChange }) {
  return (
    <div className="ml-3 flex flex-col justify-start mt-5 text-gray-200 w-64 sm:w-96 h-48 sm:h-28 bg-white rounded-lg shadow-lg p-5">
      <div className="flex mb-2 items-center w-full text-base text-yellow-600 font-light">
        <FilterIcon className="w-5 h-5 mr-2" /> Filter By Director
      </div>
      <div className="flex flex-col sm:flex-row justify-between">
        {directors.map((director, index) => (
          <Checkbox
            key={`${index}_${director}`}
            id={`${index}_${director}`}
            value={director}
            checked={checked.includes(director)}
            label={director}
            onChange={onCheckedChange}
          />
        ))}
      </div>
    </div>
  );
}

Filter.propTypes = {
  directors: PropTypes.array,
  checked: PropTypes.array,
  onCheckedChange: PropTypes.func
};
