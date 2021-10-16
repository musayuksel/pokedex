/*eslint-disable */
import React, { useState } from "react";

export default function CaughtPokemon(props) {
  const [caught, setCaught] = useState([]);
  const catchPokemon = (pokeName) => {
    setCaught((arr) => {
      setPokemonNameInput("");
      return arr.concat(pokeName);
    });
  };

  const pokedexList = caught.map((pokedex, i) => (
    <li key={`pokedex${i}`}>{pokedex}</li>
  ));

  const [pokemonNameInput, setPokemonNameInput] =
    useState("");

  function handleInputChange(e) {
    setPokemonNameInput(e.target.value);
  }
  return (
    <>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <input
        type="text"
        name=""
        id=""
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button
        onClick={() => {
          pokemonNameInput &&
            catchPokemon(pokemonNameInput);
        }}
      >
        Catch Pokemon
      </button>
      <ul>{pokedexList}</ul>
    </>
  );
}
