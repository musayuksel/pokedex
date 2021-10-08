export default function Logo({ appName, handleClick }) {
  return (
    <header>
      <h1>Welcome to the {appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="pokemon"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </header>
  );
}
