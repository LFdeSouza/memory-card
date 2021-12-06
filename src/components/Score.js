import React from "react";

const Score = ({ currentScore = 0, bestScore = 0 }) => {
  return (
    <div className="score">
      <p>Current Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
};

export default Score;
