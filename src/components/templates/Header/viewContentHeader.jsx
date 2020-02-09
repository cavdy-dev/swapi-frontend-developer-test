import React from 'react';
import Nav from '../../molecules/Nav/nav';
import { starships } from '../../../utils/strings';
import { randomImg } from '../../../utils/helpers';

const ViewContentHeader = ({ title }) => (
  <header className="header">
    <Nav />
    <img
      className="header__bg-img"
      src={starships[randomImg(starships)]}
      alt=""
    />
    <p className="header__text">{title}</p>
  </header>
);

export default ViewContentHeader;
