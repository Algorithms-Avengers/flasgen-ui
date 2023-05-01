import React from "react";
import { FlashCardData } from "../data/FlashCardData";

type GeneratedCardsProps = {
  onChangePage: Function;
  flashcards: FlashCardData[];
};

export const GeneratedCards = ({ onChangePage, flashcards }: GeneratedCardsProps) => {
  console.log("Flash cards: ", flashcards);

  return (
    <>
      <h1>Generated Card</h1>
      <button onClick={() => onChangePage()}>Change Route</button>
    </>
  );
};
