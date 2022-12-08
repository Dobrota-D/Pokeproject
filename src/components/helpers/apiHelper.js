import axios from 'axios';

export const getAllPokemons = async () => {
  let data;
  await axios.get('https://pokebuildapi.fr/api/v1/pokemon').then(response => {
    data = response.data;
  });
  return data;
};

export const getUniquePokemon = async id => {
  let data;
  await axios
    .get(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
    .then(response => {
      data = response.data;
    });
  return data;
};

export const getPokemonByType = async type => {
  let data;
  await axios
    .get(`https://pokebuildapi.fr/api/v1/pokemon/type/${type}`)
    .then(response => {
      data = response.data;
    });
  return data;
};

export const getPokemonByGen = async generation => {
  let data;
  await axios
    .get(`https://pokebuildapi.fr/api/v1/pokemon/generation/${generation}`)
    .then(response => {
      data = response.data;
    });
  return data;
};
