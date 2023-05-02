import React, { useEffect, useState } from "react";
import { FlashCardData, generateFlashCards } from "../data/FlashCardData.tsx";
import { Button } from "@mui/material";
import { RowFlashCard } from "./RowFlashCard.tsx";
import { LoadingButton } from "@mui/lab";
import { HomeRenderType } from "./HomePage.tsx";

type GeneratedCardsProps = {
  onChangePage: Function;
  flashcards: FlashCardData[];
  searchText: string;
  onChangeFlashcards: Function;
};

interface RegenerateButtonState {
  color: any;
  isLoading: boolean;
}

export const GeneratedCards = ({ onChangePage, flashcards, searchText, onChangeFlashcards }: GeneratedCardsProps) => {
  const [generatedFlashCards, setGeneratedFlashCards] = useState<FlashCardData[]>(flashcards);
  const [regenerateButtonState, setRegenerateButtonState] = useState<RegenerateButtonState>({ color: "secondary", isLoading: false });

  useEffect(() => {
    setGeneratedFlashCards(flashcards);
  }, [flashcards]);

  const modifyFlashCard = (index, modifiedFlashcard) => {
    console.log("Modify");
    setGeneratedFlashCards((prevState: FlashCardData[]) => {
      console.log("Modified");
      return prevState.map((flashcard, idx) => {
        if (idx === index) {
          return modifiedFlashcard;
        }
        return flashcard;
      });
    });
  };

  const onClickRegenerateButton = async () => {
    // Wait for flash cards to be generated
    setRegenerateButtonState((prevState) => ({ ...prevState, isLoading: true }));
    const flashCards = await generateFlashCards(searchText);
    console.log("Regenerated flash cards: ", flashCards);
    // Set loading to false
    setRegenerateButtonState((prevState) => ({ ...prevState, isLoading: false }));

    // Update flashcard
    onChangeFlashcards(flashCards);
    onChangePage(HomeRenderType.GENERATED_CARDS);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Generated Cards</h1>
      <ScrollableBox maxHeight="400px">
        <ol>
          {generatedFlashCards.map((flashcard: FlashCardData, index) => (
            <li key={index}>
              <RowFlashCard flashcard={flashcard} key={index} modifyFlashCard={modifyFlashCard} index={index} />
            </li>
          ))}
        </ol>
      </ScrollableBox>
      <br />
      <Button variant="contained" color="success" onClick={() => onChangePage()}>
        SAVE CARDS
      </Button>
      <br />
      <br />
      <LoadingButton
        variant="contained"
        loading={regenerateButtonState.isLoading}
        color={regenerateButtonState.color}
        onClick={() => onClickRegenerateButton()}
      >
        REGENERATE
      </LoadingButton>
    </div>
  );
};

interface ScrollableBoxProps {
  children: React.ReactNode;
  maxHeight: string;
}

const ScrollableBox = ({ children, maxHeight }: ScrollableBoxProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ maxHeight: maxHeight, overflowY: "scroll", border: "1px solid black", padding: "10px", width: "80%", maxWidth: "800px", height: "600px" }}>
        {children}
      </div>
    </div>
  );
};
