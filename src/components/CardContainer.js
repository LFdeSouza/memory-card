import React from "react";
import Card from "./Card";
import Score from "./Score";

const CardContainer = ({ pokemonCards = [] }) => {
  return (
    <section className="game-board">
      <Score />
      <div className="cards-container">
        {pokemonCards.map((card) => (
          <Card />
        ))}
      </div>
    </section>
  );
};

export default CardContainer;
