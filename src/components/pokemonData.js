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

export default async function fetchPokemons() {
  const promises = pokemon.map(async (pokemon) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`Hey! An error: ${err}`));

    return { name: data.name, img: data.sprites.front_default, id: uuidv4() };
  });
  const pokemonData = await Promise.all(promises);
  return pokemonData;
}
