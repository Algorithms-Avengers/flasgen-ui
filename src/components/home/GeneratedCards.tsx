import React, { useState } from "react";
import { FlashCardData } from "../data/FlashCardData";
import { Button } from "@mui/material";
import { RowFlashCard } from "./RowFlashCard.tsx";

type GeneratedCardsProps = {
  onChangePage: Function;
  flashcards: FlashCardData[];
};

export const GeneratedCards = ({ onChangePage, flashcards }: GeneratedCardsProps) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Generated Cards</h1>
      <ScrollableBox maxHeight="400px">
        <ol>
          {flashcards.map((flashcard: FlashCardData, index) => (
            <li key={index}>
              <RowFlashCard flashcard={flashcard} key={index} onChangePage={onChangePage} />
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
