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
    <section className="catchPokemonSection">
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <input
        type="text"
        name=""
        id=""
        placeholder="pokemon name"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button
        className="catchPokemon"
        onClick={() => {
          pokemonNameInput &&
            catchPokemon(pokemonNameInput);
        }}
      >
        Catch Pokemon
      </button>
      <ul>{pokedexList}</ul>
    </section>
  );
}
