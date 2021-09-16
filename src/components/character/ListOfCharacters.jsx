import React from 'react';
import CharacterListItem from '../character/CharacterListItem';
import { Link } from 'react-router-dom';
import { useCharacter } from '../../hooks/useCharacter';

const ListOfCharacters = () => {
  const { characters, loading } = useCharacter();

  if(loading)
    return (
      <img
        src="https://thumbs.gfycat.com/SoftEarnestGyrfalcon-max-1mb.gif"
        alt="loading spinner"
      />
    );

  return (
    <ul aria-label="character-list">
      {characters.map((character) => (
        <Link key={character.id} to={`/${character.id}`}>
          <li key={character.id}>
            <CharacterListItem image={character.image} name={character.name} />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default ListOfCharacters;
