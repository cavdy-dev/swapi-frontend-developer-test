import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import WindowSizeListener from 'react-window-size-listener';
import Slider from 'react-slick';
import PlanetCard from '../../molecules/PlanetCard/planetCard';
import StarwarsCard from '../../molecules/StarwarsCard/StarwarsCard';
import {
  planets,
  starships,
  characters,
  contentDesc
} from '../../../utils/strings';
import { randomImg, objectEmpty, splitURL } from '../../../utils/helpers';

const RecentlyViewed = ({
  planetsData,
  type,
  starshipsData,
  charactersData
}) => {
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
    if (!objectEmpty(planetsData)) {
      switch (type) {
        case 'people':
          setData(charactersData);
          break;
        case 'planets':
          setData(planetsData);
          break;
        case 'starships':
          setData(starshipsData);
          break;
        default:
          break;
      }
    }
  }, []);

  useEffect(() => {
    if (screenWidth <= 560) {
      setSlides(1);
    } else if (screenWidth <= 965) {
      setSlides(2);
    } else if (screenWidth > 965) {
      setSlides(3);
    }
  }, [screenWidth]);

  const switchComponent = result => {
    switch (type) {
      case 'people':
        return (
          <StarwarsCard
            key={result.name}
            url={splitURL(result.url)}
            image={characters[randomImg(characters)]}
            title={result.name}
            desc={contentDesc}
            cargo={result.gender}
            model={result.birth_year}
          />
        );
      case 'starships':
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
      case 'planets':
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
      default:
        return;
    }
  };

  return (
    <>
      <WindowSizeListener
        onResize={windowSize => {
          setScreenWidth(windowSize.windowWidth);
        }}
      />
      <div className="recent">
        <Slider {...settings}>
          {!objectEmpty(data) &&
            data.results.map((result, i) => {
              if (i < 9) {
                return switchComponent(result);
              }
            })}
        </Slider>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  planetsData: state.planets,
  starshipsData: state.starships,
  charactersData: state.characters
});

export default connect(mapStateToProps, {})(RecentlyViewed);
