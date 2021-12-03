import React from "react";

const Score = ({ currentScore = 0, BestScore = 0 }) => {
  return (
    <div className="score">
      <p>Current Score: {currentScore}</p>
      <p>Best Score: {BestScore}</p>
    </div>
  );
};

export default Score;
