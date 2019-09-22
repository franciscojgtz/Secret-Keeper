import React from "react";
import Card from "react-bootstrap/Card";

interface IIncorrectGuesses {
  letters: string[];
}

export const IncorrectGuesses: React.FC<IIncorrectGuesses> = (
  props: IIncorrectGuesses
): JSX.Element => {
  const { letters } = props;
  const lettersArray = letters.map(l => `${l} `);
  return (
    <>
      <Card>
        <Card.Body className="text-center">
          <Card.Title>Incorrect Letters</Card.Title>
          <Card.Text>{lettersArray}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
