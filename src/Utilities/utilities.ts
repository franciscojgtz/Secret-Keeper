export const getRandomWord = (words: string[]): string => {
  return words[Math.floor(Math.random() * words.length)];
};

export const isFirstGame = (gameID: number): boolean => {
  return gameID === 0;
};
