export const getRandomWord = (words: string[]): string => {
  return words[Math.floor(Math.random() * words.length)];
};
