import React from "react";
import "./App.css";
import BestPokemon from "./components/BestPokemon";
import CaughtPokemon from "./components/CaughtPokemon";
import Logo from "./components/Logo";
import PokemonCity from "./components/PokemonCity";
import PokemonMovesSelector from "./components/PokemonMovesSelector";

function App() {
  const logWhenClicked = () => {
    console.log("THE LOGO CLICKED...");
  };
  return (
    <>
      <Logo
        appName="Pokedex"
        handleClick={logWhenClicked}
      />
      <main>
        <BestPokemon
          abilities={[
            "Anticipation",
            "Adaptability",
            "Run-Away",
            "new ability",
          ]}
        />
        <PokemonMovesSelector />
        <PokemonCity />
        <CaughtPokemon
          date={new Date().toLocaleDateString()}
        />
      </main>
    </>
  );
}
export default App;
