import React from "react";
import Pokemon from "./components/pokemon/pokemon";
import Moves from './components/pokemon/moves';

function App() {
  const [pokemon, setPokemon] = React.useState({});
  const [n, setN] = React.useState(1);

  function loadPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        console.log("pokemon:", pokemon);
      });
  }

  function handleNextPokemon() {
    setN(n + 1);
    loadPokemon(n + 1);
  }

  return pokemon.sprites ? (
    < div className="bg-secondary container" >

      <div>
        <button onClick={handleNextPokemon}>Proximo</button>
      </div>
      <Pokemon
        asset={pokemon.sprites.front_default}
        name={pokemon.name}
        types={pokemon.types.map((type) => type.type.name).join(", ")}
        moves={
          <div className="d-flex justify-content-center align-items-center">
            <ul>
              {pokemon.moves.map((move) => (
                <li key={move.move.name}>{move.move.name}</li>
              ))}
            </ul>
          </div>
        }
      />
    </div>
  ) : (
    <div>
      <button onClick={() => loadPokemon(1)}>Carregar</button>
    </div>
  );
}

export default App;

