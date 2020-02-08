import React, { useState, useEffect } from 'react';
import WindowSizeListener from 'react-window-size-listener';
import Slider from 'react-slick';
import PlanetCard from '../../molecules/PlanetCard/planetCard';
import ContentTitle from '../../atoms/ContentTitle/contentTitle';
import { popularPlanets, planets } from '../../../utils/strings';
import { randomImg } from '../../../utils/helpers';

const Planets = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [slides, setSlides] = useState(3);
  const settings = {
    className: 'planets',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: slides
  };

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
        <PlanetCard id={1} image={planets[randomImg(planets)]} title="" />
        <PlanetCard id={2} image={planets[randomImg(planets)]} title="" />
        <PlanetCard id={3} image={planets[randomImg(planets)]} title="" />
        <PlanetCard id={4} image={planets[randomImg(planets)]} title="" />
        <PlanetCard id={5} image={planets[randomImg(planets)]} title="" />
        <PlanetCard id={6} image={planets[randomImg(planets)]} title="" />
        <PlanetCard id={7} image={planets[randomImg(planets)]} title="" />
        <PlanetCard id={8} image={planets[randomImg(planets)]} title="" />
        <PlanetCard id={9} image={planets[randomImg(planets)]} title="" />
      </Slider>
    </>
  );
};

export default Planets;
