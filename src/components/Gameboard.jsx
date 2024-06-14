import { useState } from 'react';
import { useEffect } from 'react';
import arrayShuffle from 'array-shuffle';
import getPokemonData from './pokemonData';

export default function Gameboard() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const pokeData = await getPokemonData();
        setPokemon(pokeData);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  function randomizePokemon() {
    const shuffled = arrayShuffle(pokemon);
    setPokemon(shuffled);
  }

  return (
    <div>
      {pokemon.map((pokemon) => {
        return (
          <div key={pokemon.id} onClick={randomizePokemon}>
            <img src={pokemon.img} />
            <p>{pokemon.name}</p>
          </div>
        );
      })}
    </div>
  );
}
