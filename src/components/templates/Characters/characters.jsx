import React from 'react';
import CharacterCard from '../../molecules/CharacterCard/characterCard';
import { characters } from '../../../utils/strings';
import { randomImg } from '../../../utils/helpers';

const Characters = () => {
  return (
    <div className="characters">
      <CharacterCard
        id={1}
        image={characters[randomImg(characters)]}
        name=""
        nickname=""
        desc=""
      />
      <CharacterCard
        id={2}
        image={characters[randomImg(characters)]}
        name=""
        nickname=""
        desc=""
      />
      <CharacterCard
        id={3}
        image={characters[randomImg(characters)]}
        name=""
        nickname=""
        desc=""
      />
      <CharacterCard
        id={4}
        image={characters[randomImg(characters)]}
        name=""
        nickname=""
        desc=""
      />
      <CharacterCard
        id={5}
        image={characters[randomImg(characters)]}
        name=""
        nickname=""
        desc=""
      />
      <CharacterCard
        id={6}
        image={characters[randomImg(characters)]}
        name=""
        nickname=""
        desc=""
      />
    </div>
  );
};

export default Characters;
