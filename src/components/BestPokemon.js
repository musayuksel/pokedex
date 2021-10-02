export default function BestPokemon(prop) {
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {prop.abilities.map((abilitie) => (
          <li key={abilitie}>{abilitie}</li>
        ))}
      </ul>
    </div>
  );
}
