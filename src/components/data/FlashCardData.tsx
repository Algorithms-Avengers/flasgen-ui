import axios from "axios";
import { RegenerateLevel } from "components/home/GeneratedCards";

export interface FlashCardData {
  id?: number; // can be undefined as initially created
  question: string;
  answer: string;
}

export interface FlashCardDeck {
  id: number;
  name: string;
  flashCards: FlashCardData[];
}

const FLASHCARD_GENERATOR_API = "https://1fyijkhfxa.execute-api.us-west-2.amazonaws.com/default/flashcard_ml_management";
const FETCH_DATA_API = "https://mxri27m4f2.execute-api.us-west-2.amazonaws.com/default/flashgen-backend";

export const generateFlashCards = async (inputText: string, additionalData?: any): Promise<FlashCardData[]> => {
  const { data } = await axios.post(FLASHCARD_GENERATOR_API, {
    text: inputText,
    level: additionalData.level ? additionalData.level : "",
  });

  const flashCards: FlashCardData[] = [];
  data.body.forEach((flashCard: FlashCardData) => {
    flashCards.push(flashCard);
  });

  return flashCards;
};

export const fetchDecks = async () => {
  const { data } = await axios.get(FETCH_DATA_API);

  const decks: FlashCardDeck[] = [];
  data.forEach((deck: FlashCardDeck) => {
    decks.push(deck);
  });

  return decks;
};
