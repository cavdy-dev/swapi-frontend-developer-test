import React from 'react';
import Title from '../components/title';
import Link from '../components/atoms/ViewMore/viewMore';
import Header from '../components/templates/Header/header';
import Starships from '../components/templates/Starships/starships';
import Planets from '../components/templates/Planets/planets';
import Characters from '../components/templates/Characters/characters';
import ContentTitle from '../components/atoms/ContentTitle/contentTitle';
import { popularCharacters } from '../utils/strings';
import Footer from '../components/atoms/Footer/footer';

const Home = () => (
  <>
    <Title page="Home" />
    <Header />
    <Starships limit={6} />
    <Link to="/starships" />
    <Planets />
    <Link to="/planets" />
    <div className="mtop">
      <ContentTitle title={popularCharacters} />
      <Characters limit={6} />
    </div>
    <Link to="/characters" />
    <Footer />
  </>
);

export default Home;
