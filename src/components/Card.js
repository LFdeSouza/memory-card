import React from "react";

const Card = ({ pokemonImage, pokemonName, pokemonId, onChoose }) => {
  return (
    <div className="card" id={pokemonId} onClick={(e) => onChoose(pokemonId)}>
      <img className="card-image" src={pokemonImage} alt={pokemonName} />
      <p>{pokemonName}</p>
    </div>
  );
};

export default Card;
