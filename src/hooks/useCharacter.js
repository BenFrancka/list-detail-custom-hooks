import { useEffect, useState } from 'react';
import { fetchCharacterData } from '../services/RAndMApi';

export const useCharacter = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacterData()
      .then((characters) => setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);

  return { characters, loading };
};
