import React from "react";
import "./secretWord.css";

interface ISecretWord {
  secretWord: string;
}

export const SecretWord: React.FC<ISecretWord> = (
  props: ISecretWord
): JSX.Element => {
  const { secretWord } = props;
  return <div className="secret-word">{secretWord}</div>;
};
