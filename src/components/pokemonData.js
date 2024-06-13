import { v4 as uuidv4 } from 'uuid';

const pokemon = [
  'chimchar',
  'seel',
  'snorlax',
  'ditto',
  'vibrava',
  'abra',
  'blastoise',
  'treecko',
  'drifloon',
  'sawk',
  'heliolisk',
  'musharna',
];

export default async function getPokemonData() {
  const promises = pokemon.map(async (pokemon) => {
    const pokeName = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
      {
        mode: 'cors',
      }
    )
      .then((response) => response.json())
      .then((response) => {
        return response.name;
      })
      .catch((err) => console.log(`Hey! An error: ${err}`));
    const pokeImg = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
      {
        mode: 'cors',
      }
    )
      .then((response) => response.json())
      .then((response) => {
        return response.sprites.front_default;
      })
      .catch((err) => console.log(`Hey! An error: ${err}`));
    return { name: pokeName, img: pokeImg, id: uuidv4() };
  });
  const pokemonData = await Promise.all(promises);
  return pokemonData;
}
