import React from "react";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { GuessesLeft } from "../GuessesLeft/GuessesLeft";
import { IncorrectGuesses } from "../IncorrectGuesses/IncorrectGuesses";
import { IAppSecretWordState, IAppUserStatsState } from "../../App";
import { UserStats } from "../UserStats/UserStats";

interface IInfoPanelProps {
  secretWord: IAppSecretWordState;
  userStats: IAppUserStatsState;
}

export const InfoPanel: React.FC<IInfoPanelProps> = (
  props: IInfoPanelProps
): JSX.Element => {
  const { secretWord, userStats } = props;
  const { remainingGuesses, incorrectGuesses } = secretWord;
  return (
    <Row>
      <Col xs={12}>
        <UserStats userStats={userStats} />
      </Col>
      <Col xs={12}>
        <GuessesLeft remainingGuesses={remainingGuesses} />
      </Col>
      <Col xs={12}>
        <IncorrectGuesses letters={incorrectGuesses} />
      </Col>
    </Row>
  );
};
