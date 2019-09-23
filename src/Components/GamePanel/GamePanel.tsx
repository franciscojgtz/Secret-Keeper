import React from "react";
import Col from "react-bootstrap/Col";
import { MessageBoard } from "../MessageBoard/MessageBoard";
import { isGameOn } from "../../Utilities/utilities";
import { GuessLetterInput } from "../GuessLetterInput/GuessLetterInput";
import { StartGame } from "../StartGame/StartGame";
import { SecretWord } from "../SecretWord/SecretWord";
import {
  IAppSecretWordState,
  IAppGameState,
  IAppUserStatsState
} from "../../App";
import Row from "react-bootstrap/Row";

interface IGamePanelProps {
  secretWord: IAppSecretWordState;
  setSecretWord: React.Dispatch<React.SetStateAction<IAppSecretWordState>>;
  game: IAppGameState;
  setGame: React.Dispatch<React.SetStateAction<IAppGameState>>;
  userStats: IAppUserStatsState;
  setUserStats: React.Dispatch<React.SetStateAction<IAppUserStatsState>>;
}

export const GamePanel: React.FC<IGamePanelProps> = (
  props: IGamePanelProps
): JSX.Element => {
  const {
    secretWord,
    setSecretWord,
    game,
    setGame,
    userStats,
    setUserStats
  } = props;

  const isGamePlaying = isGameOn(
    game.id,
    secretWord.hiddenWord,
    secretWord.remainingGuesses
  );

  return (
    <Row>
      <Col xs={12}>
        <MessageBoard secretWord={secretWord} />
      </Col>
      <Col xs={12}>
        {isGamePlaying ? (
          <GuessLetterInput
            secretWord={secretWord}
            setSecretWord={setSecretWord}
            userStats={userStats}
            setUserStats={setUserStats}
          />
        ) : (
          <StartGame game={game} setGame={setGame} />
        )}
      </Col>
      <Col>
        {isGamePlaying ? <SecretWord secretWord={secretWord.hiddenWord} /> : ""}
      </Col>
    </Row>
  );
};
