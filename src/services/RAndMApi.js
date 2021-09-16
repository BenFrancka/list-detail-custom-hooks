export const fetchCharacterData = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character/');
  const { results } = await res.json();

  return results;
};

export const fetchCharacterById = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  return res.json();
};
