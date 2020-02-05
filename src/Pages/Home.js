import React from 'react';
import Title from '../components/title';
import Header from '../components/templates/Header/header';
import Starships from '../components/templates/Starships/starships';
import Planets from '../components/templates/Planets/planets';
import Characters from '../components/templates/Characters/characters';
import ContentTitle from '../components/atoms/ContentTitle/contentTitle';
import { popularCharacters } from '../utils/strings';

const Home = () => (
  <>
    <Title page="Home" />
    <Header />
    <Starships />
    <Planets />
    <div className="mtop">
      <ContentTitle title={popularCharacters} />
      <Characters />
    </div>
  </>
);

export default Home;
