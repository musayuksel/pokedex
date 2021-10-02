import React from "react";
import "./App.css";
import BestPokemon from "./components/BestPokemon";
import CaughtPokemon from "./components/CaughtPokemon";
import Logo from "./components/Logo";

function App() {
  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon
        abilities={["Anticipation", "Adaptability", "Run-Away", "new ability"]}
      />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>
  );
}

export default App;
