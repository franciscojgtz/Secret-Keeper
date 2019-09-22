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
      <Card className="text-center">
        <Card.Header>Incorrect Letters</Card.Header>
        <Card.Body>
          <Card.Text>{lettersArray}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
