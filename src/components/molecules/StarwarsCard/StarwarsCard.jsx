import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StarwarsCard = ({ url, image, title, cargo, model, desc }) => (
  <div className="starwarsCard">
    <div className="starwarsCard__image">
      <img className="starwarsCard__image-photo" src={image} alt="" />
    </div>
    <div className="starwarsCard__content">
      <div className="starwarsCard__content-wrapper">
        <h1 className="starwarsCard__content-title">{title}</h1>
        <p className="starwarsCard__content-details">{model}</p>
        <p className="starwarsCard__content-details">{cargo}</p>
        <p className="starwarsCard__content-desc">
          {desc && desc.substring(0, 70)}
        </p>
        <Link to={url} className="starwarsCard__content-link">
          Read More
        </Link>
      </div>
    </div>
  </div>
);

StarwarsCard.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default StarwarsCard;
