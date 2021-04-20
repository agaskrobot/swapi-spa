import PropTypes from 'prop-types';

export function Checkbox({ id, checked, label, value, onChange }) {
  const handleChange = (e) => {
    e.stopPropagation();
    onChange(e.target.value);
  };
  return (
    <label className="flex h-auto items-center w-auto text-sm my-1 py-1 cursor-pointer">
      <input
        className="h-full w-4 mr-2 cursor-pointer"
        onChange={handleChange}
        type="checkbox"
        id={id}
        name={label}
        value={value}
        checked={checked}
      />
      {label}
    </label>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
};
