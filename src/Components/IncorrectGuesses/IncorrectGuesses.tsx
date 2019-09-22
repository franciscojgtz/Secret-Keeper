import React from "react";
import Card from "react-bootstrap/Card";

interface IIncorrectGuesses {
  letters: string[];
}

export const IncorrectGuesses: React.FC<IIncorrectGuesses> = (
  props: IIncorrectGuesses
): JSX.Element => {
  return (
    <>
      <Card>
        <Card.Body className="text-center">
          <Card.Title>Incorrect Letters</Card.Title>
          <Card.Text>{props.letters}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
