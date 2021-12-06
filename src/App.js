import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import {
  generateRandomIdList,
  getPokemons,
  getPokemonData,
  shuffleCards,
  resetChosenCards,
} from "./game/cardsManager";
import {
  isGameOver,
  updateBestScore,
  updateScore,
  updateChosenCards,
  resetScore,
} from "./game/scoreManager";
import Loading from "./components/Loading";
import GameOverModal from "./components/GameOverModal";
//sould I import all these functions as modules?

function App() {
  const POKEMON_AMMOUNT = 12;

  const [pokemons, setPokemons] = useState();
  const [chosenCards, setChosenCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isLoading, setLoading] = useState(true); //Any way to set a timer on the loading so that the loading page shows for a while?
  const [gameOver, setGameOver] = useState(false);

  const setPokemonList = () => {
    const randomPokemonsId = generateRandomIdList(POKEMON_AMMOUNT);
    getPokemons(randomPokemonsId)
      .then(getPokemonData)
      .then(setPokemons)
      .then(setLoading(false));
  };

  //get pokemons on page load.
  useEffect(() => {
    setPokemonList();
  }, []);

  //update the bestScore. UseEffect is async
  useEffect(
    () => setBestScore(updateBestScore(currentScore, bestScore)),
    [currentScore]
  );

  const playRound = (card) => {
    if (!isGameOver(chosenCards, card)) {
      setChosenCards(updateChosenCards(chosenCards, card));
      setCurrentScore(updateScore(currentScore));
    } else {
      setGameOver(true);
    }
    setPokemons(shuffleCards(pokemons));
    // I've notice that when a card stays in it's place, the animation doesn't happend (I imagine it's because react only updates the necessary components.)
    //Is there a way to reload every card in each cycle?
  };

  const onNewGame = () => {
    setChosenCards(resetChosenCards()); //Is it a good idea to have a function returning an empy array
    setCurrentScore(resetScore()); //or a 0 to be more declarartive? Or shoud I just hard code the values?
    setGameOver(false);
    setLoading(true);
    setPokemonList();
  };

  return (
    <div className="App">
      {isLoading && <Loading />}
      <Header />
      <CardContainer
        pokemonCards={pokemons}
        currentScore={currentScore}
        bestScore={bestScore}
        onChoose={playRound}
      />
      {gameOver && (
        <GameOverModal bestScore={bestScore} onNewGame={onNewGame} />
      )}
    </div>
  );
}

export default App;
