import React from "react";
import Col from "react-bootstrap/Col";
import { MessageBoard } from "../MessageBoard/MessageBoard";
import { isGameOn } from "../../Utilities/utilities";
import { GuessLetterInput } from "../GuessLetterInput/GuessLetterInput";
import { StartGame } from "../StartGame/StartGame";
import { SecretWord } from "../SecretWord/SecretWord";
import { IAppSecretWordState, IAppGameState } from "../../App";
import Row from "react-bootstrap/Row";

interface IGamePanelProps {
  secretWord: IAppSecretWordState;
  setSecretWord: React.Dispatch<React.SetStateAction<IAppSecretWordState>>;
  game: IAppGameState;
  setGame: React.Dispatch<React.SetStateAction<IAppGameState>>;
}

export const GamePanel: React.FC<IGamePanelProps> = (
  props: IGamePanelProps
): JSX.Element => {
  const { secretWord, setSecretWord, game, setGame } = props;
  const { hiddenWord, remainingGuesses } = secretWord;
  const { id: gameID } = game;

  return (
    <Row>
      <Col xs={12}>
        <MessageBoard secretWord={secretWord} />
      </Col>
      <Col xs={12}>
        {isGameOn(gameID, hiddenWord, remainingGuesses) ? (
          <GuessLetterInput
            secretWord={secretWord}
            setSecretWord={setSecretWord}
          />
        ) : (
          <StartGame game={game} setGame={setGame} />
        )}
      </Col>
      <Col>
        {isGameOn(gameID, hiddenWord, remainingGuesses) ? (
          <SecretWord secretWord={secretWord.hiddenWord} />
        ) : (
          ""
        )}
      </Col>
    </Row>
  );
};
