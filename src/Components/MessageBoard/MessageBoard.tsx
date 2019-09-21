import React from "react";
import Alert from "react-bootstrap/Alert";
import { IAppSecretWordState } from "../../App";
import { isPlayerWinner, isPlayerLoser } from "../../Utilities/utilities";
import { textVariants } from "../../Types/types";

interface IMessageBoard {
  secretWord: IAppSecretWordState;
}

export const MessageBoard: React.FC<IMessageBoard> = (
  props: IMessageBoard
): JSX.Element => {
  const { secretWord } = props;
  const { message, variant } = getMessage(secretWord);
  return (
    <Alert variant={variant}>
      <Alert.Heading>Secret-Keeper!</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};

const WINNER = "winner";
const GAME_START = "game start";
const LOSE_GAME = "lose game";

const messages = {
  [GAME_START]: `Guess the word in less than six tries.`,
  [LOSE_GAME]: `Game Over! Try again.`,
  [WINNER]: `Congratulations! You guessed the word.`
};

const variants: {
  [variant: string]: textVariants;
} = {
  [WINNER]: "success",
  [GAME_START]: "primary",
  [LOSE_GAME]: "danger"
};

const getMessage = (secretWord: IAppSecretWordState) => {
  const { hiddenWord, remainingGuesses } = secretWord;
  const didPlayerWin = isPlayerWinner(hiddenWord);
  const didPlayerLose = isPlayerLoser(remainingGuesses, hiddenWord);

  if (didPlayerWin) {
    return { message: messages[WINNER], variant: variants[WINNER] };
  } else if (didPlayerLose) {
    return { message: messages[LOSE_GAME], variant: variants[LOSE_GAME] };
  }

  return { message: messages[GAME_START], variant: variants[GAME_START] };
};
