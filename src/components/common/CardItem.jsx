import PropTypes from 'prop-types';

export const CardItem = ({ label, value }) => (
  <div className="flex w-full my-2">
    <p className="flex w-28 mr-4 font-light text-yellow-600">{label}</p>
    <p>{value}</p>
  </div>
);

CardItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any
};
