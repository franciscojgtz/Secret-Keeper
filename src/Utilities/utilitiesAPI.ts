import { getRandomWord } from "./utilities";

export const getSecretWordFromAPI = async (): Promise<string> => {
  const result = await fetch("http://app.linkedin-reach.io/words");
  const data = await result.text();
  const words = data.split(/\n/);
  return getRandomWord(words);
};
