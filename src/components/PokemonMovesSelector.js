import React, { useState } from "react";
import PokemonMoves from "./PokemonMoves";
export default function PokemonMovesSelector() {
  const [id, setId] = useState(null);

  function handleBulbasaurClick() {
    setId(1);
  }
  function handleCharmanderClick() {
    setId(4);
  }

  const style = {
    backgroundColor: "orange",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    padding: "1rem",
    margin: "10px",
  };
  return (
    <section>
      <button style={style} onClick={handleBulbasaurClick}>
        Fetch Bulbasaur
      </button>
      <button style={style} onClick={handleCharmanderClick}>
        Fetch Charmander
      </button>
      {id ? <PokemonMoves pokemonId={id} /> : null}
    </section>
  );
}
