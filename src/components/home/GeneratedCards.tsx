import React, { useState } from "react";
import { FlashCardData } from "../data/FlashCardData";
import { Button } from "@mui/material";

type GeneratedCardsProps = {
  onChangePage: Function;
  flashcards: FlashCardData[];
};

export const GeneratedCards = ({ onChangePage, flashcards }: GeneratedCardsProps) => {
  console.log("Flash cards: ", flashcards);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Generated Cards</h1>
      <ScrollableBox maxHeight="400px">
        <ol>
          {flashcards.map((flashcard: FlashCardData, index) => (
            <li>
              <RowFlashCard flashcard={flashcard} key={index} />
            </li>
          ))}
        </ol>
      </ScrollableBox>
      <br />
      <Button variant="contained" color="success" onClick={() => onChangePage()}>
        SAVE CARDS
      </Button>
      <br />
      <br />
      <Button variant="contained" color="secondary" onClick={() => onChangePage()}>
        REGENERATE
      </Button>
    </div>
  );
};

interface ScrollableBoxProps {
  children: React.ReactNode;
  maxHeight: string;
}

const ScrollableBox = ({ children, maxHeight }: ScrollableBoxProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ maxHeight: maxHeight, overflowY: "scroll", border: "1px solid black", padding: "10px", width: "80%", maxWidth: "800px", height: "600px" }}>
        {children}
      </div>
    </div>
  );
};

export default ScrollableBox;

interface RowFlashCardProps {
  flashcard: FlashCardData;
}

const RowFlashCard = ({ flashcard }: RowFlashCardProps) => {
  const MAX_LENGTH = 50;
  const optionalDots = flashcard.question.length >= MAX_LENGTH ? "...?" : "";

  return (
    <div style={{ display: "flex", marginLeft: "20px" }}>
      <div style={{ display: "flex", flex: 1, fontSize: "1.2em" }}>
        <p>
          {flashcard.question.slice(0, MAX_LENGTH)}
          {optionalDots}
        </p>
      </div>
      <div style={{ marginLeft: "10px", marginRight: "20px" }}>
        <Button variant="contained" color="primary">
          SHOW
        </Button>
      </div>
    </div>
  );
};
