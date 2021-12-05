import React from "react";
import Card from "./Card";
import Score from "./Score";

const CardContainer = ({
  pokemonCards = [],
  currentScore,
  bestScore,
  onChoose,
}) => {
  return (
    <section className="game-board">
      <Score currentScore={currentScore} bestScore={bestScore} />
      <div className="cards-container">
        {pokemonCards.map((pokemon) => (
          <Card
            pokemonName={pokemon.name}
            pokemonImage={pokemon.image}
            pokemonId={pokemon.id}
            key={pokemon.id}
            onChoose={onChoose}
          />
        ))}
      </div>
    </section>
  );
};

export default CardContainer;
