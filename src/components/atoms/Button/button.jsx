import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, children, btnHandler }) => (
  <button type="submit" className={className} onClick={btnHandler}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  btnHandler: PropTypes.func.isRequired
};

export default Button;
