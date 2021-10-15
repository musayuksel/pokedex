import React, { useState, useEffect } from "react";

export default function PokemonMoves() {
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
      const data = await response.json();
      console.log(data);
      setPokemonData(data);
    }
    fetchData();
  }, []);

  if (pokemonData) {
    return (
      <div>
        <p>{pokemonData.name}'s moves:</p>
        <ul>
          {pokemonData.moves.map((move, index) => {
            return <li key={index}>{move.move.name}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
