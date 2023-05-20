import React, { useState } from "react";
import { DeckContext, LearnContext } from "./DataContext";
import { FlashCardDeck } from "./FlashCardData";
import { useFetchData } from "./useFetchData";

export const ContextProvider = ({ children }) => {
  const decks = useFetchData();

  const [learnDeck, setLearnDeck] = useState<FlashCardDeck | undefined>(undefined);

  return (
    <DeckContext.Provider value={decks}>
      <LearnContext.Provider value={{ learnDeck, setLearnDeck }}>{children}</LearnContext.Provider>
    </DeckContext.Provider>
  );
};
