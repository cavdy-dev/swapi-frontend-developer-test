import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Title from '../components/title';
import Header from '../components/templates/Header/header';
import Characters from '../components/templates/Characters/characters';
import ContentTitle from '../components/atoms/ContentTitle/contentTitle';
import { popularCharacters } from '../utils/strings';
import Footer from '../components/atoms/Footer/footer';
import Select from '../components/atoms/Select/select';
import Paginate from '../components/atoms/Pagination/paginate';
import { objectEmpty, pageCount } from '../utils/helpers';
import getCharacters from '../services/Actions/charactersAction';

const gender = ['male', 'female'];
const view = ['grid', 'list'];

const CharactersComponent = ({ getCharacters, charactersData }) => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [genderSelect, setGenderSelect] = useState('');
  useEffect(() => {
    if (!objectEmpty(charactersData)) {
      setData(charactersData);
    }
  }, [charactersData]);

  const handleChange = ({ target: { value } }) => setGenderSelect(value);

  const paginate = page => {
    page = page.selected + 1;
    getCharacters(page);
    setPage(page);
  };

  return (
    <>
      <Title page="Characters" />
      <Header />
      <ContentTitle title={popularCharacters} />
      <div className="select-wrapper">
        <Select
          htmlFor="gender"
          handleChange={handleChange}
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
      <Characters limit={10} gender={genderSelect} />
      {!objectEmpty(data) ? (
        <Paginate
          currentPage={page}
          loadPage={pageCount(data.count)}
          pageCount={pageCount(data.count)}
          changeData={paginate}
        />
      ) : null}
      <Footer />
    </>
  );
};

const mapStateToProps = state => ({
  charactersData: state.characters
});

export default connect(mapStateToProps, { getCharacters })(CharactersComponent);
