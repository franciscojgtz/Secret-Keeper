import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { GuessesLeft } from "./Components/GuessesLeft/GuessesLeft";
import { MessageBoard } from "./Components/MessageBoard/MessageBoard";
import { IncorrectGuesses } from "./Components/IncorrectGuesses/IncorrectGuesses";
import { GuessLetterInput } from "./Components/GuessLetterInput/GuessLetterInput";
import { SecretWord } from "./Components/SecretWord/SecretWord";

interface IAppSecretWordState {
  word: string;
  hiddenWord: string;
  incorrectGuesses: string[];
  remainingGuesses: number;
}

const App: React.FC = (): JSX.Element => {
  const [secretWord, setSecretWord] = useState<IAppSecretWordState>({
    word: "",
    hiddenWord: "",
    incorrectGuesses: [],
    remainingGuesses: 6
  });

  return (
    <Container className="App">
      <Row>
        <Col xs={4}>
          <GuessesLeft />
        </Col>
        <Col xs={8}>
          <MessageBoard />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <IncorrectGuesses />
        </Col>
        <Col xs={8}>
          <GuessLetterInput />
        </Col>
      </Row>
      <Row>
        <Col>
          <SecretWord word={secretWord.hiddenWord} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
