import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CharacterCard from '../../molecules/CharacterCard/characterCard';
import { characters, contentDesc } from '../../../utils/strings';
import { randomImg, objectEmpty, splitURL } from '../../../utils/helpers';
import getCharacters from '../../../services/Actions/charactersAction';
import Loader from '../../atoms/Loader/loader';

const Characters = ({
  getCharacters,
  charactersData,
  limit,
  gender = 'all'
}) => {
  const [data, setData] = useState({});
  const [loading, setLoader] = useState(true);

  useEffect(() => {
    getCharacters();
  }, []);
  useEffect(() => {
    if (!objectEmpty(charactersData)) {
      setData(charactersData);
      setLoader(false);
    }
  }, [charactersData]);

  return (
    <div className="characters">
      <Loader loading={loading} />
      {!objectEmpty(data) &&
        data.results
          .filter(result => {
            if (gender === 'all') return result;
            else if (gender === 'robot') return result.gender === 'n/a';
            return result.gender === gender;
          })
          .map((result, i) => {
            if (i < limit) {
              return (
                <CharacterCard
                  key={result.name}
                  url={splitURL(result.url)}
                  image={characters[randomImg(characters)]}
                  name={result.name}
                  nickname={`${result.gender} - ${result.birth_year}`}
                  desc={contentDesc}
                />
              );
            }
          })}
    </div>
  );
};

const mapStateToProps = state => ({
  charactersData: state.characters
});

export default connect(mapStateToProps, { getCharacters })(Characters);
