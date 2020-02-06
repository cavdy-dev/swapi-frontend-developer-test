import React from 'react';
import Title from '../components/title';
import Header from '../components/templates/Header/header';
import Starships from '../components/templates/Starships/starships';
import Footer from '../components/atoms/Footer/footer';

const StarshipsComponent = () => (
  <>
    <Title page="Home" />
    <Header />
    <Starships />
    <Footer />
  </>
);

export default StarshipsComponent;
