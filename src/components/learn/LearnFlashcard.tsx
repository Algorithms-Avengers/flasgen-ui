import React, { useContext, useState } from "react";
import { FlashCardData } from "components/data/FlashCardData";
import { LearnContext } from "components/data/DataContext";

export const LearnFlashcard = () => {
  const { learnDeck } = useContext(LearnContext);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);

  if (learnDeck === undefined) {
    return <h2>There's no flash cards</h2>;
  }

  return <Flashcard flashcard={learnDeck[currentCardIndex]} />;
};

const Flashcard = ({ flashcard }: { flashcard: FlashCardData }) => {
  return (
    <div key={flashcard.id}>
      <h3>{flashcard.question}</h3>
    </div>
  );
};
