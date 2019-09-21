import { HIDDEN_LETTER_DELIMITER } from "../Types/constants";

export const getRandomWord = (words: string[]): string => {
  return words[Math.floor(Math.random() * words.length)];
};

export const isFirstGame = (gameID: number): boolean => {
  return gameID === 0;
};

export const isPlayerWinner = (hiddenWord: string): boolean => {
  return !hiddenWord.split("").includes(HIDDEN_LETTER_DELIMITER);
};

export const isGameOn = (
  gameID: number,
  hiddenWord: string,
  remainingGuesses: number
): boolean => {
  return (
    !isFirstGame(gameID) && !isPlayerWinner(hiddenWord) && remainingGuesses > 0
  );
};

export const hideWord = (word: string): string => {
  return word
    .split("")
    .map(letter => HIDDEN_LETTER_DELIMITER)
    .join("");
};

export const isPlayerLoser = (
  remainingGuesses: number,
  hiddenWord: string
): boolean => {
  return remainingGuesses === 0 && !isPlayerWinner(hiddenWord);
};
