import React from "react";

const GameOverModal = ({ bestScore = 0, onNewGame }) => {
  return (
    <div className="modal game-over-container">
      <div className="game-over">
        <h1 className="game-over-text">Game Over!</h1>
        <p className="game-over-text">
          Congratulations! Your best score is: {bestScore}
        </p>
        <button className="btn" onClick={onNewGame}>
          Play again
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;
