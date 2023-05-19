import React from "react";
import { DeckContext } from "./DataContext.tsx";
import { useFetchData } from "./useFetchData.tsx";

export const ContextProvider = ({ children }) => {
  const decks = useFetchData();

  return <DeckContext.Provider value={decks}>{children}</DeckContext.Provider>;
};
