import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { GuessesLeft } from "./Components/GuessesLeft/GuessesLeft";
import { MessageBoard } from "./Components/MessageBoard/MessageBoard";
import { IncorrectGuesses } from "./Components/IncorrectGuesses/IncorrectGuesses";
import { GuessLetterInput } from "./Components/GuessLetterInput/GuessLetterInput";
import { SecretWord } from "./Components/SecretWord/SecretWord";
import { getSecretWordFromAPI } from "./Utilities/utilitiesAPI";
import { StartGame } from "./Components/StartGame/StartGame";
import { isGameOn, hideWord } from "./Utilities/utilities";
import { HIDDEN_LETTER_DELIMITER } from "./Types/constants";

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
          <GuessesLeft remainingGuesses={secretWord.remainingGuesses} />
        </Col>
        <Col xs={8}>
          <MessageBoard secretWord={secretWord} />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <IncorrectGuesses letters={secretWord.incorrectGuesses} />
        </Col>
        <Col xs={8}>
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
      </Row>
      <Row>
        <Col>
          {isGameOn(
            game.id,
            secretWord.hiddenWord,
            secretWord.remainingGuesses
          ) ? (
            <SecretWord word={secretWord.hiddenWord} />
          ) : (
            ""
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
