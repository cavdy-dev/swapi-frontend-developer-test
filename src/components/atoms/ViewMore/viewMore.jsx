import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ViewMore = ({ to }) => (
  <div className="view-more">
    <Link className="view-more-link" to={to}>
      View More
    </Link>
  </div>
);

ViewMore.propTypes = {
  to: PropTypes.string.isRequired
};

export default ViewMore;
