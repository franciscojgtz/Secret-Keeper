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
        <Card.Body>
          <Card.Text>{props.letters}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
