import React, { useState } from "react";
export default function CaughtPokemon(props) {
  // const [caught, setCaught] = useState(0);
  // const catchPokemon = () => setCaught((count) => count + 1);
  const [caught, setCaught] = useState([]);
  const pokedexPool = ["Spearow", "Ditto", "Butterfree", "Pikachu", "Eevee"];
  const catchPokemon = () => {
    setCaught((arr) => {
      const randomIndex = Math.floor(Math.random() * pokedexPool.length);
      return arr.concat(pokedexPool[randomIndex]);
    });
  };
  const pokedexList = caught.map((pokedex, i) => (
    <li key={`pokedex${i}`}>{pokedex}</li>
  ));
  return (
    <>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>{pokedexList}</ul>
    </>
  );
}
