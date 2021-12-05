import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import {
  generateRandomIdList,
  getPokemons,
  getPokemonData,
  shuffleCards,
} from "./game/cardsChooser";
import fp from "lodash/fp";

function App() {
  const POKEMON_AMMOUNT = 12;
  const [pokemons, setPokemons] = useState();
  // const [choosedCards, setChoosedCards] = useState([]);
  // const [currentScore, setCurrentScore] = useState(0);
  // const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const randomPokemonsId = generateRandomIdList(POKEMON_AMMOUNT);
    getPokemons(randomPokemonsId).then(getPokemonData).then(setPokemons);
  }, []);

  const handleCardClick = (card) => {
    setPokemons(shuffleCards(pokemons));
    console.log(pokemons);
  };

  return (
    <div className="App">
      <Header />
      <CardContainer pokemonCards={pokemons} onChoose={handleCardClick} />
    </div>
  );
}

export default App;
