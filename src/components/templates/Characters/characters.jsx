import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CharacterCard from '../../molecules/CharacterCard/characterCard';
import { characters, contentDesc } from '../../../utils/strings';
import { randomImg, objectEmpty, splitURL } from '../../../utils/helpers';
import getCharacters from '../../../services/Actions/charactersAction';

const Characters = ({
  getCharacters,
  charactersData,
  limit,
  gender = 'all'
}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    getCharacters();
  }, []);
  useEffect(() => {
    if (!objectEmpty(charactersData)) {
      setData(charactersData);
    }
  }, [charactersData]);

  return (
    <div className="characters">
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
                  nickname={result.gender}
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
