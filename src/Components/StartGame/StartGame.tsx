import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl, Button, FormControlProps } from "react-bootstrap";
import { IAppGameState } from "../../App";
import { ReplaceProps, BsPrefixProps } from "react-bootstrap/helpers";

interface IStartGameProps {
  game: IAppGameState;
  setGame: React.Dispatch<React.SetStateAction<IAppGameState>>;
}

export const StartGame: React.FC<IStartGameProps> = (
  props: IStartGameProps
): JSX.Element => {
  const { game, setGame } = props;
  const { difficulty, id } = game;

  const updateDifficulty = (
    event: React.FormEvent<
      ReplaceProps<"input", BsPrefixProps<"input"> & FormControlProps>
    >
  ) => {
    const newDifficulty = parseInt(event.currentTarget.value || "1");
    const gameCopy = { ...game, difficulty: newDifficulty };
    setGame(gameCopy);
  };

  const startGame = () => {
    const newGameID = id + 1;
    const gameCopy = { ...game, id: newGameID };
    setGame(gameCopy);
  };
  return (
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon3">Difficulty Level</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="New Game"
        aria-label="New Game"
        type="number"
        value={difficulty.toString()}
        onChange={updateDifficulty}
        min="1"
        max="10"
      />
      <InputGroup.Append>
        <Button variant="primary" onClick={startGame}>
          Start Game
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};
