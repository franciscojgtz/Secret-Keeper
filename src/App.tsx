import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { MessageBoard } from "./Components/MessageBoard/MessageBoard";
import { GuessLetterInput } from "./Components/GuessLetterInput/GuessLetterInput";
import { SecretWord } from "./Components/SecretWord/SecretWord";
import { getSecretWordFromAPI } from "./Utilities/utilitiesAPI";
import { StartGame } from "./Components/StartGame/StartGame";
import { isGameOn, hideWord } from "./Utilities/utilities";
import { HIDDEN_LETTER_DELIMITER } from "./Types/constants";
import { InfoPanel } from "./Components/InfoPanel/InfoPanel";

export interface IAppSecretWordState {
  word: string;
  hiddenWord: string;
  incorrectGuesses: string[];
  remainingGuesses: number;
}

export interface IAppGameState {
  id: number;
  difficulty: number;
}

export interface IUserStatState {
  gamesWon: number;
  gamesLost: number;
}

const App: React.FC = (): JSX.Element => {
  const [secretWord, setSecretWord] = useState<IAppSecretWordState>({
    word: "Loading...",
    hiddenWord: HIDDEN_LETTER_DELIMITER,
    incorrectGuesses: [],
    remainingGuesses: 6
  });

  const [game, setGame] = useState({
    id: 0,
    difficulty: 1
  });

  const [userStats, setUserStats] = useState<IUserStatState>({
    gamesLost: 0,
    gamesWon: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      const wordFromAPI = await getSecretWordFromAPI(game.difficulty);
      const word = wordFromAPI.toLowerCase();
      console.log(word);
      const hiddenWord = hideWord(word);
      setSecretWord({
        word,
        hiddenWord,
        incorrectGuesses: [],
        remainingGuesses: 6
      });
    };

    fetchData();
  }, [game.id]);

  return (
    <Container className="App">
      <Row>
        <Col xs={4}>
          <InfoPanel secretWord={secretWord} />
        </Col>
        <Col xs={8}>
          <Row>
            <Col xs={12}>
              <MessageBoard secretWord={secretWord} />
            </Col>
            <Col xs={12}>
              {isGameOn(
                game.id,
                secretWord.hiddenWord,
                secretWord.remainingGuesses
              ) ? (
                <GuessLetterInput
                  secretWord={secretWord}
                  setSecretWord={setSecretWord}
                />
              ) : (
                <StartGame game={game} setGame={setGame} />
              )}
            </Col>
            <Col>
              {isGameOn(
                game.id,
                secretWord.hiddenWord,
                secretWord.remainingGuesses
              ) ? (
                <SecretWord secretWord={secretWord.hiddenWord} />
              ) : (
                ""
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
