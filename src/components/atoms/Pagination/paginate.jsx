import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import Left from '../Left/left';
import Right from '../Right/right';

const Paginate = ({ currentPage, loadPage, pageCount, changeData }) => (
  <div className="pagination">
    <div className="pagination-page">
      {currentPage}-{loadPage} of {pageCount}
    </div>
    <ReactPaginate
      previousLabel={<Left />}
      nextLabel={<Right />}
      pageCount={pageCount}
      marginPagesDisplayed={0}
      pageRangeDisplayed={0}
      onPageChange={changeData}
      containerClassName="pagination-paginate"
      subContainerClassName="pages pagination"
      activeClassName="active"
    />
  </div>
);

Paginate.propTypes = {
  currentPage: PropTypes.number.isRequired,
  loadPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  changeData: PropTypes.func.isRequired
};

export default Paginate;
