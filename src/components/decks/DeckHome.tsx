import { DeckContext } from "components/data/DataContext";
import { FlashCardDeck } from "components/data/FlashCardData";
import React, { useContext } from "react";
import { DeckDisplay } from "./DeckDisplay";

export const DeckHome = () => {
  const decks = useContext(DeckContext);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>This is the deck homes</h1>
      {decks.map((deck: FlashCardDeck) => {
        return (
          <div style={{ marginBottom: "20px", width: "700px" }} key={deck.id}>
            <DeckDisplay deck={deck} />
          </div>
        );
      })}
    </div>
  );
};
