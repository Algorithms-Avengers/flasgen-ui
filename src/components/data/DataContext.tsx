import { createContext } from "react";
import { FlashCardData, FlashCardDeck } from "./FlashCardData";

export const DeckContext = createContext<FlashCardDeck[]>([]);

export interface LearnContextType {
  learnDeck: FlashCardDeck | undefined;
  setLearnDeck: Function;
}

export const LearnContext = createContext<LearnContextType>({ learnDeck: undefined, setLearnDeck: () => {} });
