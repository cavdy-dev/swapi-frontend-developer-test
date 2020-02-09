import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PlanetCard from '../../molecules/PlanetCard/planetCard';
import ContentTitle from '../../atoms/ContentTitle/contentTitle';
import { popularPlanets, planets } from '../../../utils/strings';
import { randomImg, objectEmpty, splitURL } from '../../../utils/helpers';
import getPlanets from '../../../services/Actions/PlanetsAction';

const PlanetGrid = ({ getPlanets, planetsData }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    getPlanets();
  }, []);
  useEffect(() => {
    if (!objectEmpty(planetsData)) {
      setData(planetsData);
    }
  }, [planetsData]);

  return (
    <>
      <ContentTitle title={popularPlanets} />
      <div className="starships">
        {!objectEmpty(data) &&
          data.results.map((result, i) => {
            if (i < 9) {
              return (
                <PlanetCard
                  key={result.name}
                  url={splitURL(result.url)}
                  image={planets[randomImg(planets)]}
                  title={result.name}
                  temperature={result.climate}
                  population={result.population}
                />
              );
            }
          })}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  planetsData: state.planets
});

export default connect(mapStateToProps, { getPlanets })(PlanetGrid);
