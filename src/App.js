import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import {
  generateRandomIdList,
  getPokemons,
  getPokemonData,
  shuffleCards,
} from "./game/cardsManager";
import fp from "lodash/fp";
import {
  isGameOver,
  updateBestScore,
  updateScore,
  updateChosenCards,
} from "./game/scoreManager";

function App() {
  const POKEMON_AMMOUNT = 12;
  const [pokemons, setPokemons] = useState();
  const [chosenCards, setChosenCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const randomPokemonsId = generateRandomIdList(POKEMON_AMMOUNT);
    getPokemons(randomPokemonsId).then(getPokemonData).then(setPokemons);
  }, []);

  const playRound = (card) => {
    if (!isGameOver(chosenCards, card)) {
      setChosenCards(updateChosenCards(chosenCards, card));
      setCurrentScore(updateScore(currentScore));
      setBestScore(updateBestScore(currentScore, bestScore));
    }
    setPokemons(shuffleCards(pokemons));
  };

  return (
    <div className="App">
      <Header />
      <CardContainer
        pokemonCards={pokemons}
        currentScore={currentScore}
        bestScore={bestScore}
        onChoose={playRound}
      />
    </div>
  );
}

export default App;
