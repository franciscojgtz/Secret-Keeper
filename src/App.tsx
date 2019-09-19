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
import { HIDDEN_LETTER_DELIMITER } from "./Types/constants";

export interface IAppSecretWordState {
  word: string;
  hiddenWord: string;
  incorrectGuesses: string[];
  remainingGuesses: number;
}

const App: React.FC = (): JSX.Element => {
  const [secretWord, setSecretWord] = useState<IAppSecretWordState>({
    word: "Loading...",
    hiddenWord: "Loading...",
    incorrectGuesses: [],
    remainingGuesses: 6
  });

  useEffect(() => {
    const fetchData = async () => {
      const wordFromAPI = await getSecretWordFromAPI();
      const word = wordFromAPI.toLowerCase();
      console.log(word);
      const hiddenWord = word
        .split("")
        .map(letter => HIDDEN_LETTER_DELIMITER)
        .join("");
      setSecretWord({
        word,
        hiddenWord,
        incorrectGuesses: [],
        remainingGuesses: 6
      });
    };

    fetchData();
  }, []);

  return (
    <Container className="App">
      <Row>
        <Col xs={4}>
          <GuessesLeft remainingGuesses={secretWord.remainingGuesses} />
        </Col>
        <Col xs={8}>
          <MessageBoard />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <IncorrectGuesses letters={secretWord.incorrectGuesses} />
        </Col>
        <Col xs={8}>
          <GuessLetterInput
            secretWord={secretWord}
            setSecretWord={setSecretWord}
          />
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
