import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import WindowSizeListener from 'react-window-size-listener';
import Slider from 'react-slick';
import PlanetCard from '../../molecules/PlanetCard/planetCard';
import ContentTitle from '../../atoms/ContentTitle/contentTitle';
import { popularPlanets, planets } from '../../../utils/strings';
import { randomImg, objectEmpty, splitURL } from '../../../utils/helpers';
import getPlanets from '../../../services/Actions/PlanetsAction';

const Planets = ({ getPlanets, planetsData }) => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [slides, setSlides] = useState(3);
  const [data, setData] = useState({});
  const settings = {
    className: 'planets',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: slides
  };

  useEffect(() => {
    getPlanets();
  }, []);
  useEffect(() => {
    if (!objectEmpty(planetsData)) {
      setData(planetsData);
    }
  }, [planetsData]);

  useEffect(() => {
    if (screenWidth <= 560) {
      setSlides(1);
    } else if (screenWidth <= 965) {
      setSlides(2);
    } else if (screenWidth > 965) {
      setSlides(3);
    }
  }, [screenWidth]);

  return (
    <>
      <WindowSizeListener
        onResize={windowSize => {
          setScreenWidth(windowSize.windowWidth);
        }}
      />
      <ContentTitle title={popularPlanets} />
      <Slider {...settings}>
        {!objectEmpty(data) &&
          data.results.map((result, i) => {
            if (i < 9) {
              return (
                <PlanetCard
                  key={result.name}
                  url={splitURL(result.url)}
                  image={planets[randomImg(planets)]}
                  title={result.name}
                />
              );
            }
          })}
      </Slider>
    </>
  );
};

const mapStateToProps = state => ({
  planetsData: state.planets
});

export default connect(mapStateToProps, { getPlanets })(Planets);
