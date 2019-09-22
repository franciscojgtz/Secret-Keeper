import React from "react";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { GuessesLeft } from "../GuessesLeft/GuessesLeft";
import { IncorrectGuesses } from "../IncorrectGuesses/IncorrectGuesses";
import { IAppSecretWordState } from "../../App";

interface IInfoPanelProps {
  secretWord: IAppSecretWordState;
}

export const InfoPanel: React.FC<IInfoPanelProps> = (
  props: IInfoPanelProps
): JSX.Element => {
  const { secretWord } = props;
  const { remainingGuesses, incorrectGuesses } = secretWord;
  return (
    <Row>
      <Col xs={12}>
        <GuessesLeft remainingGuesses={remainingGuesses} />
      </Col>
      <Col xs={12}>
        <IncorrectGuesses letters={incorrectGuesses} />
      </Col>
    </Row>
  );
};
