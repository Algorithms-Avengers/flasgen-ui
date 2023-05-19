import { useEffect, useState } from "react";
import { fetchDecks, FlashCardDeck } from "./FlashCardData";

export const useFetchData = () => {
  const [decks, setDecks] = useState<FlashCardDeck[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedDecks = await fetchDecks();
      setDecks(fetchedDecks);
    };

    fetchData().catch();
  }, []);

  return decks;
};
