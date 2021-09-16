import React from 'react';
import Header from '../character/Header';
import { useCharacterDetail } from '../../hooks/useCharacterDetail';

const CharacterDetailDisplay = () => {
  const { character, loading } = useCharacterDetail();

  if(loading)
    return (
      <img
        src="https://thumbs.gfycat.com/SoftEarnestGyrfalcon-max-1mb.gif"
        alt="loading spinner"
      />
    );

  return (
    <>
      <Header />
      <ul aria-label="character details">
        <li>
          <img src={character.image} alt={character.name} />
        </li>
        <li>{character.name}</li>
        <li>{character.status}</li>
        <li>{character.species}</li>
      </ul>
    </>
  );
};

export default CharacterDetailDisplay;
