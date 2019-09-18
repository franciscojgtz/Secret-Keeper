import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { GuessesLeft } from "./Components/GuessesLeft/GuessesLeft";
import { MessageBoard } from "./Components/MessageBoard/MessageBoard";
import { IncorrectGuesses } from "./Components/IncorrectGuesses/IncorrectGuesses";
import { GuessLetterInput } from "./Components/GuessLetterInput/GuessLetterInput";
import { SecretWord } from "./Components/SecretWord/SecretWord";

const App: React.FC = (): JSX.Element => {
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
          <SecretWord />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
