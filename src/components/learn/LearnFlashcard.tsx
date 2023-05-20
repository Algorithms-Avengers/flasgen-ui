import React, { useContext, useState } from "react";
import { FlashCardData, FlashCardDeck } from "components/data/FlashCardData";
import { LearnContext } from "components/data/DataContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { RouteEnum } from "components/navigation/NavigationBar";
import "./LearnFlashcard.css";

export const LearnDeck = () => {
  const { learnDeck }: { learnDeck: FlashCardDeck } = useContext(LearnContext);
  const [flashcardIndex, setFlashcardIndex] = useState<number>(0);
  const navigate = useNavigate();

  if (learnDeck === undefined) {
    return <h2>There's no flash cards</h2>;
  }

  if (flashcardIndex === learnDeck.flashCards.length) {
    const onClickReturnDeckHome = () => {
      navigate(RouteEnum.DECK_HOME);
    };

    return (
      <div className="finished-cards-container">
        <h2>You've finished all cards</h2>
        <Button onClick={onClickReturnDeckHome} variant="outlined">
          Return to Deck home
        </Button>
      </div>
    );
  }

  return <Flashcard key={learnDeck.flashCards[flashcardIndex].id} flashcard={learnDeck.flashCards[flashcardIndex]} setFlashcardIndex={setFlashcardIndex} />;
};

interface FlashcardProps {
  flashcard: FlashCardData;
  setFlashcardIndex: Function;
}

const Flashcard = ({ flashcard, setFlashcardIndex }: FlashcardProps) => {
  const [displayContent, setDisplayContent] = useState(flashcard.question);
  const [isShowAnswer, setIsShowAnswer] = useState(false);

  const onClickShowAnswer = () => {
    setDisplayContent(flashcard.answer);
    setIsShowAnswer(true);
  };

  const onClickNextQuestion = () => {
    setFlashcardIndex((i: number) => i + 1);
  };

  return (
    <div className="flashcard-container">
      <div className="flashcard">
        <h3 style={{ textAlign: "center" }}>{displayContent}</h3>
      </div>

      {!isShowAnswer ? (
        <Button variant="outlined" onClick={onClickShowAnswer}>
          Show Answer
        </Button>
      ) : (
        <div className="button-container">
          <Button variant="contained" color="success" onClick={onClickNextQuestion}>
            Easy to answer
          </Button>
          <Button variant="contained" color="warning" onClick={onClickNextQuestion}>
            A little hard
          </Button>
          <Button variant="contained" color="error" onClick={onClickNextQuestion}>
            Can't remember
          </Button>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
