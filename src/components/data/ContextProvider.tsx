import React from "react";
import { DeckContext } from "./DataContext";
import { useFetchData } from "./useFetchData";

export const ContextProvider = ({ children }) => {
  const decks = useFetchData();

  return <DeckContext.Provider value={decks}>{children}</DeckContext.Provider>;
};
