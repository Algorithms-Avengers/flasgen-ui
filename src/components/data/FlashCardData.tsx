import axios from "axios";

export interface FlashCardData {
  question: string;
  answer: string;
}

const FLASHCARD_GENERATOR_API = "https://1fyijkhfxa.execute-api.us-west-2.amazonaws.com/default/flashcard_ml_management";

export const generateFlashCards = async (inputText: string): Promise<FlashCardData[]> => {
  const { data } = await axios.post(FLASHCARD_GENERATOR_API, {
    text: inputText,
  });

  const flashCards: FlashCardData[] = [];
  data.body.forEach((flashCard: FlashCardData) => {
    flashCards.push(flashCard);
  });

  return flashCards;
};
