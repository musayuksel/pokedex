import React, { useState } from "react";
export default function CaughtPokemon(props) {
  const [caught, setCaught] = useState(0);
  const catchPokemon = () => setCaught((count) => count + 1);

  return (
    <>
      <p>
        Caught {caught} Pokemon on {props.date}
      </p>
      <button onClick={catchPokemon}>Catch Pokemon</button>
    </>
  );
}
