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
      <Card>
        <Card.Body className="text-center">
          <Card.Title>Guesses Left</Card.Title>
          <Card.Text>{props.remainingGuesses}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
