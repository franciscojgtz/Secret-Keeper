import React from "react";
import Alert from "react-bootstrap/Alert";

export const MessageBoard: React.FC = (): JSX.Element => {
  return (
    <Alert variant="primary">
      <Alert.Heading>Secret-Keeper!</Alert.Heading>
      <p>Guess the word in less than six tries.</p>
    </Alert>
  );
};
