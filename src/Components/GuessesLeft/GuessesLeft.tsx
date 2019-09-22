import React from "react";
import Card from "react-bootstrap/Card";

interface IGuessesLeft {
  remainingGuesses: number;
}

export const GuessesLeft: React.FC<IGuessesLeft> = (
  props: IGuessesLeft
): JSX.Element => {
  return (
    <>
      <Card className="text-center">
        <Card.Header>Guesses Left</Card.Header>
        <Card.Body className="text-center">
          <Card.Text>{props.remainingGuesses}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
