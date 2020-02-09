import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Title from '../components/title';
import Header from '../components/templates/Header/header';
import PlanetsGrid from '../components/templates/Planets/planetsGrid';
import Footer from '../components/atoms/Footer/footer';
import Paginate from '../components/atoms/Pagination/paginate';
import { objectEmpty, pageCount } from '../utils/helpers';
import getPlanets from '../services/Actions/PlanetsAction';

const PlanetsComponent = ({ getPlanets, planetsData }) => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (!objectEmpty(planetsData)) {
      setData(planetsData);
    }
  }, [planetsData]);

  const searchHandler = ({ target: { value } }) => getPlanets(1, value);

  const paginate = page => {
    page = page.selected + 1;
    getPlanets(page);
    setPage(page);
  };

  return (
    <>
      <Title page="Home" />
      <Header searchHandler={searchHandler} />
      <PlanetsGrid />
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
  planetsData: state.planets
});

export default connect(mapStateToProps, { getPlanets })(PlanetsComponent);
