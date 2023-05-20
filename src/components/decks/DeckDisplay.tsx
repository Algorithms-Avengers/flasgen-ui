import React from "react";
import { FlashCardDeck } from "components/data/FlashCardData";
import { Button } from "@mui/material";
import "./DeckDisplay.css";

export const DeckDisplay = ({ deck }: { deck: FlashCardDeck }) => {
  const isPublic = true;
  const lastUpdateDate = new Date().toLocaleDateString();

  return (
    <div className="deck-display-container">
      <div className="deck-info-container">
        <div>
          <h2 className="deck-name">{deck.name}</h2>
          <span className={`public-tag ${isPublic ? "public" : "private"}`}>{isPublic ? "Public" : "Private"}</span>
          <p className="last-update">Last Update: {lastUpdateDate}</p>
        </div>
      </div>
      <div className="button-container">
        <Button variant="outlined">LEARN</Button>
        <Button variant="outlined">SETTING</Button>
        <Button variant="outlined">EDIT</Button>
      </div>
    </div>
  );
};
