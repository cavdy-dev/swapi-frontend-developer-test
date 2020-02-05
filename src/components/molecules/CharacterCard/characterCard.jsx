import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WindowSizeListener from 'react-window-size-listener';
import { characters } from '../../../utils/strings';

const ff =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit culpa doloremque ratione minima accusantium porro libero aliquam vero enim inventore aliquid repellat illo, rerum obcaecati suscipit consequatur mollitia velit voluptas';

const CharacterCard = () => {
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
        <img
          className="characterCard-image"
          src={characters[0]}
          alt="character"
        />
        <div className="characterCard-content">
          <h1 className="characterCard-content-name">Cavdy</h1>
          <h3 className="characterCard-content-nickname">darklord</h3>

          <p className="characterCard-content-desc">
            {`${ff.substring(0, count)}... `}
            <Link className="characterCard-content-link" to="/">
              Read More
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
