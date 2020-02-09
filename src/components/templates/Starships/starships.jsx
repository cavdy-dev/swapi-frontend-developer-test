import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import StarwarsCard from '../../molecules/StarwarsCard/StarwarsCard';
import ContentTitle from '../../atoms/ContentTitle/contentTitle';
import {
  popularStarShips,
  starships,
  contentDesc
} from '../../../utils/strings';
import { randomImg, objectEmpty, splitURL } from '../../../utils/helpers';
import getStarships from '../../../services/Actions/starshipsAction';
import Loader from '../../atoms/Loader/loader';

const Starships = ({ getStarships, starshipsData, limit }) => {
  const [data, setData] = useState({});
  const [loading, setLoader] = useState(true);

  useEffect(() => {
    getStarships();
  }, []);
  useEffect(() => {
    if (!objectEmpty(starshipsData)) {
      setData(starshipsData);
      setLoader(false);
    }
  }, [starshipsData]);

  return (
    <>
      <ContentTitle title={popularStarShips} />
      <div className="starships">
        <Loader loading={loading} />
        {!objectEmpty(data) &&
          data.results.map((result, i) => {
            if (i < limit) {
              return (
                <StarwarsCard
                  key={result.name}
                  url={splitURL(result.url)}
                  image={starships[randomImg(starships)]}
                  title={result.name}
                  desc={contentDesc}
                  cargo={result.cargo_capacity}
                  model={result.model}
                />
              );
            }
          })}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  starshipsData: state.starships
});

export default connect(mapStateToProps, { getStarships })(Starships);
