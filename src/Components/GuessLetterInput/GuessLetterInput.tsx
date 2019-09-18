import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl, Button } from "react-bootstrap";

export const GuessLetterInput: React.FC = (): JSX.Element => {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl placeholder="Guess Letter" aria-label="Guess Letter" />
        <InputGroup.Append>
          <Button variant="outline-secondary">Guess</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};
