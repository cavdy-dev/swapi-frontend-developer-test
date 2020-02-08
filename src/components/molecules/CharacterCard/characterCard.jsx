import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WindowSizeListener from 'react-window-size-listener';
import PropTypes from 'prop-types';

const CharacterCard = ({ url, image, name, nickname, desc }) => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [count, setCount] = useState(120);

  useEffect(() => {
    if (screenWidth <= 870) {
      setCount(80);
    } else if (screenWidth > 870) {
      setCount(120);
    }
  }, [screenWidth]);
  return (
    <>
      <WindowSizeListener
        onResize={windowSize => {
          setScreenWidth(windowSize.windowWidth);
        }}
      />
      <div className="characterCard">
        <img className="characterCard-image" src={image} alt="character" />
        <div className="characterCard-content">
          <h1 className="characterCard-content-name">{name}</h1>
          <h3 className="characterCard-content-nickname">{nickname}</h3>

          <p className="characterCard-content-desc">
            {`${desc && desc.substring(0, count)}... `}
            <Link className="characterCard-content-link" to={url}>
              Read More
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

CharacterCard.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default CharacterCard;
