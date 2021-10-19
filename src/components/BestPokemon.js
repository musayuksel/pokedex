export default function BestPokemon(prop) {
  return (
    <section>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {prop.abilities.map((abilitie) => (
          <li key={abilitie}>{abilitie}</li>
        ))}
      </ul>
    </section>
  );
}
