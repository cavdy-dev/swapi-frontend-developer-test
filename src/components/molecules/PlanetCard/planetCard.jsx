import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PlanetCard = ({ url, image, title, temperature, population }) => {
  return (
    <Link className="planetCard" to={url}>
      <img className="planetCard-image" src={image} alt="planets" />
      <div className="planetCard-wrapper">
        <h1 className="planetCard-wrapper-name">{title}</h1>
        <h1 className="planetCard-wrapper-temp">{temperature}</h1>
        <h1 className="planetCard-wrapper-pop">{population}</h1>
      </div>
    </Link>
  );
};

PlanetCard.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired
};

export default PlanetCard;
