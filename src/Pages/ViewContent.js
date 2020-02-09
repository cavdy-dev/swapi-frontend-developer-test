import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Title from '../components/title';
import Header from '../components/templates/Header/viewContentHeader';
import Footer from '../components/atoms/Footer/footer';
import { objectEmpty } from '../utils/helpers';
import getContent from '../services/Actions/singleContentAction';

const ViewContent = ({ match: { url }, getContent, singleContent }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    getContent(url);
  }, []);
  useEffect(() => {
    setData(singleContent);
  }, [singleContent]);

  return (
    <>
      {!objectEmpty(data) ? (
        <>
          <Title page={data.name} />
          <Header title={data.name} />
          <div className="view-content">
            <h1 className="view-content-title">{data.name}</h1>
            <ul className="view-content-content">
              {Object.entries(data).map((result, i) => (
                <li key={`${data.name}-${i}`} className="view-content-list">
                  {result[0]} - {result[1]}
                </li>
              ))}
            </ul>
          </div>
          <Footer />
        </>
      ) : null}
    </>
  );
};

const mapStateToProps = state => ({
  singleContent: state.singleContent
});

export default connect(mapStateToProps, { getContent })(ViewContent);
