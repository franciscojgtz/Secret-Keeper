import { getRandomWord } from "./utilities";

export const getSecretWordFromAPI = async (
  difficulty: number
): Promise<string> => {
  const result = await fetch(
    `http://app.linkedin-reach.io/words?difficulty${difficulty}`
  );
  const data = await result.text();
  const words = data.split(/\n/);
  return getRandomWord(words);
};
