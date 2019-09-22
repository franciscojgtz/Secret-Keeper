import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl, Button } from "react-bootstrap";
import { IAppSecretWordState } from "../../App";
import "bootstrap/dist/css/bootstrap.min.css";
import { HIDDEN_LETTER_DELIMITER } from "../../Types/constants";
interface IGuessLetterInput {
  secretWord: IAppSecretWordState;
  setSecretWord: React.Dispatch<React.SetStateAction<IAppSecretWordState>>;
}

export const GuessLetterInput: React.FC<IGuessLetterInput> = (
  props: IGuessLetterInput
): JSX.Element => {
  const { secretWord, setSecretWord } = props;
  const [inputString, setInputString] = useState("");

  // TODO: Add type safety
  const updateInputString = (event: any) => {
    const input = event.target.value;
    const formattedInput = input.trim().toLowerCase();
    setInputString(formattedInput);
  };

  // TODO: Check for mouse event
  const submitInput = (event: any) => {
    const secretWordCopy = { ...secretWord };
    if (inputString.length === 1) {
      // One Letter
      // Is letter in secret word
      if (isLetterInSecretWord(secretWord.word, inputString)) {
        const newHiddenWord = updateHiddenWord(
          secretWord.word,
          secretWord.hiddenWord,
          inputString
        );
        setSecretWord({ ...secretWordCopy, hiddenWord: newHiddenWord });
      } else {
        secretWordCopy.remainingGuesses--;
        secretWordCopy.incorrectGuesses.push(inputString);
        setSecretWord({ ...secretWordCopy });
      }
    } else if (inputString.length > 1) {
      if (isInputSecretWord(inputString, secretWord.word)) {
        setSecretWord({ ...secretWordCopy, hiddenWord: inputString });
      } else {
        secretWordCopy.remainingGuesses--;
        setSecretWord({ ...secretWordCopy });
      }
    }

    setInputString("");
  };

  return (
    <InputGroup>
      <FormControl
        placeholder="Guess Letter"
        aria-label="Guess A Letter"
        id="guessInput"
        onChange={updateInputString}
        value={inputString}
      />
      <InputGroup.Append>
        <Button variant="primary" onClick={submitInput}>
          Guess
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

const updateHiddenWord = (
  word: string,
  hiddenWord: string,
  input: string
): string => {
  const wordArr = getWordAsArray(word);
  const hiddenWordArr = getWordAsArray(hiddenWord);

  const newHiddenWord = wordArr.map((letter, index) => {
    if (hiddenWordArr[index] === HIDDEN_LETTER_DELIMITER) {
      if (letter === input) {
        return letter;
      } else {
        return HIDDEN_LETTER_DELIMITER;
      }
    } else {
      return letter;
    }
  });

  return newHiddenWord.join("");
};

const isLetterInSecretWord = (word: string, letter: string): boolean => {
  return word.split("").includes(letter);
};

const getWordAsArray = (word: string): string[] => word.split("");

const isInputSecretWord = (input: string, word: string): boolean => {
  return input === word;
};
