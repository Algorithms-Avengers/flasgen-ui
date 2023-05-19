import { createContext } from "react";
import { FlashCardDeck } from "./FlashCardData.tsx";

export const DeckContext = createContext<FlashCardDeck[]>([]);
