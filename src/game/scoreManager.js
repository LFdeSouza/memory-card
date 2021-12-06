import { notDuplicate } from "./cardsManager";

const isGameOver = (chosenCards, currentCard) =>
  !notDuplicate(chosenCards, currentCard);

const updateScore = (score) => ++score;

const resetScore = () => 0;

const updateBestScore = (score, bestScore) =>
  score >= bestScore ? score : bestScore;

const updateChosenCards = (chosenCards, card) => [...chosenCards, card];

export {
  isGameOver,
  updateScore,
  updateBestScore,
  resetScore,
  updateChosenCards,
};
