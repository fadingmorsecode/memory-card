import { useState } from 'react';
import { useEffect } from 'react';
import arrayShuffle from 'array-shuffle';
import fetchPokemons from './pokemonData';

export default function Gameboard({ handleCardClick }) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    function fetchData() {
      fetchPokemons().then(arrayShuffle).then(setPokemon);
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
          <div
            key={pokemon.id}
            onClick={() => {
              randomizePokemon();
              handleCardClick(pokemon.id);
            }}
          >
            <img src={pokemon.img} />
            <p>{pokemon.name}</p>
          </div>
        );
      })}
    </div>
  );
}
