import React from "react";
import Card from "./Card";
import Score from "./Score";

const CardContainer = ({ pokemonCards = [], onChoose }) => {
  return (
    <section className="game-board">
      <Score />
      <div className="cards-container">
        {pokemonCards.map((pokemon) => (
          <Card
            pokemonName={pokemon.name}
            pokemonImage={pokemon.image}
            id={pokemon.id}
            key={pokemon.id}
            onChoose={onChoose}
          />
        ))}
      </div>
    </section>
  );
};

export default CardContainer;
