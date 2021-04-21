import PropTypes from 'prop-types';

export function Button({ children, width, color, disabled, submit, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  const widthClass = width ? width : 'w-full';
  return (
    <button
      className={`flex justify-center text-sm font-extralight ${color} rounded-lg items-center text-center leading-3.5 disabled:opacity-50 disabled:cursor-not-allowed h-10 ${widthClass} focus:outline-none text-gray-700`}
      onClick={handleClick}
      disabled={disabled}
      type={submit ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
  width: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  submit: PropTypes.bool
};

Button.COLOR_YELLOW = 'bg-yellow-600';
Button.COLOR_WHITE = 'bg-white';
