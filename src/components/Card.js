import React from "react";

const Card = ({
  pokemonImage = "	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  pokemonName = "charmander",
}) => {
  return (
    <div className="card">
      <img src={pokemonImage} alt={pokemonName} />
      <p>{pokemonName}</p>
    </div>
  );
};

export default Card;
