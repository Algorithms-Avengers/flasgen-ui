import { createContext } from "react";
import { FlashCardDeck } from "./FlashCardData";

export const DeckContext = createContext<FlashCardDeck[]>([]);
