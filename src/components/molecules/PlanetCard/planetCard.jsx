import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PlanetCard = ({ url, image, title }) => {
  return (
    <Link className="planetCard" to={url}>
      <img className="planetCard-image" src={image} alt="planets" />
      <h1 className="planetCard-name">{title}</h1>
    </Link>
  );
};

PlanetCard.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default PlanetCard;
