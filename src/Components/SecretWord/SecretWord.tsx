import React from "react";
import "./secretWord.css";

interface ISecretWord {
  word: string;
}

export const SecretWord: React.FC<ISecretWord> = (
  props: ISecretWord
): JSX.Element => {
  return <div className="secret-word">{props.word}</div>;
};
