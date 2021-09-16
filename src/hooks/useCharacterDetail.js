import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from '../services/RAndMApi';

export const useCharacterDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetchCharacterById(id)
      .then((character) => setCharacter(character))
      .finally(() => setLoading(false));
  }, [id]);

  return { character, loading };
};
