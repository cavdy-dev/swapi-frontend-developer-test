import React from 'react';
import Title from '../components/title';
import Header from '../components/templates/Header/header';
import Starships from '../components/templates/Starships/starships';
import Footer from '../components/atoms/Footer/footer';
import Paginate from '../components/atoms/Pagination/paginate';

const StarshipsComponent = () => (
  <>
    <Title page="Home" />
    <Header />
    <Starships />
    <Paginate
      currentPage={1}
      loadPage={8}
      pageCount={50}
      changeData={() => {}}
    />
    <Footer />
  </>
);

export default StarshipsComponent;
