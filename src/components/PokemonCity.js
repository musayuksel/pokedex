import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");
  function updateCity(eventInput) {
    setCity(eventInput.target.value);
  }
  return (
    <div>
      <input
        type="text"
        name="city"
        id="city"
        value={city}
        placeholder="pokmemon city"
        onChange={updateCity}
      />
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
