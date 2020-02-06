import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ htmlFor, handleChange, options, name, label }) => (
  <div className="select">
    <label className="select__label" htmlFor={htmlFor}>
      {label}
    </label>
    <select
      className="select__select"
      name={name}
      id={htmlFor}
      onChange={handleChange}
    >
      {options &&
        options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
    </select>
  </div>
);

Select.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Select;
