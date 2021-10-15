import React, { useState, useEffect } from "react";

export default function PokemonMoves({ pokemonId }) {
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
      const data = await r.json();
      console.log(data);
      setPokemonData(data);
    }
    fetchData();
  }, [pokemonId]);

  return (
    <div>
      {pokemonData ? (
        <>
          <img
            className="pokemon"
            src={
              pokemonId === 1
                ? "https://i.ebayimg.com/images/g/TyEAAOSww7FeZ2a0/s-l300.jpg"
                : "https://cdn.shopify.com/s/files/1/0433/1952/5529/products/BulbasaurPop_1200x.png?v=1608740311"
            }
            alt="logo"
          />
          <p>{pokemonData.name}'s moves:</p>
          <ul>
            {pokemonData.moves.map((move, index) => {
              return <li key={index}>{move.move.name}</li>;
            })}
          </ul>{" "}
        </>
      ) : null}
    </div>
  );
}
