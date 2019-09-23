import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { getSecretWordFromAPI } from "./Utilities/utilitiesAPI";
import { hideWord } from "./Utilities/utilities";
import { HIDDEN_LETTER_DELIMITER } from "./Types/constants";
import { InfoPanel } from "./Components/InfoPanel/InfoPanel";
import { GamePanel } from "./Components/GamePanel/GamePanel";

export interface IAppSecretWordState {
  word: string;
  hiddenWord: string;
  incorrectGuesses: string[];
  remainingGuesses: number;
}

export interface IAppGameState {
  id: number;
  difficulty: number;
  finished: boolean;
}

export interface IAppUserStatsState {
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

  const [game, setGame] = useState<IAppGameState>({
    id: 0,
    difficulty: 1,
    finished: false
  });

  const [userStats, setUserStats] = useState<IAppUserStatsState>({
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
          <InfoPanel secretWord={secretWord} userStats={userStats} />
        </Col>
        <Col xs={8}>
          <GamePanel
            secretWord={secretWord}
            setSecretWord={setSecretWord}
            game={game}
            setGame={setGame}
            userStats={userStats}
            setUserStats={setUserStats}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
