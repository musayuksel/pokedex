import react from "react";

export default function Logo({ appName, handleClick }) {
  const useState = react.useState;
  const [isShow, setIsShow] = useState(true);
  function changeIsShow() {
    setIsShow(!isShow);
  }
  return (
    <header>
      <h1 onClick={handleClick}>Welcome to the {appName}</h1>

      {isShow ? (
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="pokemon"
          onClick={changeIsShow}
          style={{ cursor: "pointer" }}
        />
      ) : null}
    </header>
  );
}
