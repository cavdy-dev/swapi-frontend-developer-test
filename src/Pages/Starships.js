import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Title from '../components/title';
import Header from '../components/templates/Header/header';
import Starships from '../components/templates/Starships/starships';
import Footer from '../components/atoms/Footer/footer';
import Paginate from '../components/atoms/Pagination/paginate';
import { objectEmpty, pageCount } from '../utils/helpers';
import getStarships from '../services/Actions/starshipsAction';

const StarshipsComponent = ({ getStarships, starshipsData }) => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (!objectEmpty(starshipsData)) {
      setData(starshipsData);
    }
  }, [starshipsData]);

  const searchHandler = ({ target: { value } }) => getStarships(1, value);

  const paginate = page => {
    page = page.selected + 1;
    getStarships(page);
    setPage(page);
  };

  return (
    <>
      <Title page="Starships" />
      <Header searchHandler={searchHandler} />
      <Starships limit={9} />
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
  starshipsData: state.starships
});

export default connect(mapStateToProps, { getStarships })(StarshipsComponent);
