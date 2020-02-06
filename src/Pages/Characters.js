import React from 'react';
import Title from '../components/title';
import Header from '../components/templates/Header/header';
import Characters from '../components/templates/Characters/characters';
import ContentTitle from '../components/atoms/ContentTitle/contentTitle';
import { popularCharacters } from '../utils/strings';
import Footer from '../components/atoms/Footer/footer';
import Select from '../components/atoms/Select/select';

const gender = ['male', 'female'];
const view = ['grid', 'list'];

const CharactersComponent = () => (
  <>
    <Title page="Characters" />
    <Header />
    <ContentTitle title={popularCharacters} />
    <div className="select-wrapper">
      <Select
        htmlFor="gender"
        handleChange={() => {}}
        name="gender"
        label="Filter"
        options={gender}
      />
      <Select
        htmlFor="view"
        handleChange={() => {}}
        name="view"
        label="View"
        options={view}
      />
    </div>
    <Characters />
    <Footer />
  </>
);

export default CharactersComponent;
