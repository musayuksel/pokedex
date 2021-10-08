export default function Logo(prop) {
  const logWhenClicked = () => {
    console.log("YOU CLICKED TO THE LOGO...");
  };
  return (
    <header>
      <h1>Welcome to the {prop.appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="pokemon"
        onClick={logWhenClicked}
        style={{ cursor: "pointer" }}
      />
    </header>
  );
}
