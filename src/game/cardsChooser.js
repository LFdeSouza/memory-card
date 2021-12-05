import fp from "lodash/fp";
//initiate pokedex to send requests via wrapper
const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

//get a random number from 1-151 to get the pokemons from the original games
const getRandomPokemon = () => Math.floor(Math.random() * 151 + 1);

//Too much to be in a separate function? Should I add the condition directely on the if statement?
const notDuplicate = (num, array) => array.every((x) => x !== num);

//Could not think of a simpler way to do the next two functions. Any ideas welcome
const generateRandomIdList = (size) => {
  const list = [];
  while (list.length < size) {
    const randomPokemon = getRandomPokemon();
    if (notDuplicate(randomPokemon, list)) {
      list.push(randomPokemon);
    }
  }
  return list;
};

//P.getPokemonByName will return a promisse which I can do async operations to set the state.
const getPokemons = (pokemonList) => P.getPokemonByName(pokemonList);

const getPokemonData = (pokemons) =>
  pokemons.map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.other["official-artwork"].front_default,
  }));

const shuffleCards = (cards) => fp.shuffle(cards);

export { generateRandomIdList, getPokemons, getPokemonData, shuffleCards };
