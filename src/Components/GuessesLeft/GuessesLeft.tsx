import React from "react";
import Card from "react-bootstrap/Card";

export const GuessesLeft: React.FC = (): JSX.Element => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Guesses Left</Card.Title>
          <Card.Text>6</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
