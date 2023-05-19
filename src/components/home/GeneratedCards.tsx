import React, { useContext, useEffect, useState } from "react";
import { FlashCardData, generateFlashCards } from "../data/FlashCardData.tsx";
import { Button } from "@mui/material";
import { RowFlashCard } from "./RowFlashCard.tsx";
import { LoadingButton } from "@mui/lab";
import { HomeRenderType } from "./HomePage.tsx";
import { ModalWrapper } from "../helpers/PromptWrapper.tsx";
import { DeckContext } from "../data/DataContext.tsx";
import { FlashCardDeck } from "../data/FlashCardData.tsx";

type GeneratedCardsProps = {
  onChangePage: Function;
  flashcards: FlashCardData[];
  searchText: string;
  onChangeFlashcards: Function;
};

enum RegenerateLevel {
  EASIER = "EASIER",
  HARDER = "HARDER",
  CUSTOM = "CUSTOM",
  DEFAULT = "DEFAULT",
}

interface RegenerateButtonState {
  color: any;
  isLoading: boolean;
  level: RegenerateLevel;
}

export const GeneratedCards = ({ onChangePage, flashcards, searchText, onChangeFlashcards }: GeneratedCardsProps) => {
  const [generatedFlashCards, setGeneratedFlashCards] = useState<FlashCardData[]>(flashcards);
  const [regenerateModalOpen, setRegenerateModalOpen] = useState(false);
  const [regenerateButtonState, setRegenerateButtonState] = useState<RegenerateButtonState>({
    color: "secondary",
    isLoading: false,
    level: RegenerateLevel.DEFAULT,
  });
  const [saveModalOpen, setSaveModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setGeneratedFlashCards(flashcards);
  }, [flashcards]);

  const modifyFlashCard = (index, modifiedFlashcard) => {
    setGeneratedFlashCards((prevState: FlashCardData[]) => {
      return prevState.map((flashcard, idx) => {
        if (idx === index) {
          return modifiedFlashcard;
        }
        return flashcard;
      });
    });
  };

  const onClickRegenerateButton = async () => {
    setRegenerateModalOpen(true);
  };

  const onClickSaveButton = () => {
    setSaveModalOpen(true);
  };

  const onClickRegenerateWithLevel = async (level: RegenerateLevel) => {
    // Wait for flash cards to be generated
    setRegenerateButtonState((prevState) => ({ ...prevState, isLoading: true }));
    const flashCards = await generateFlashCards(searchText, { level });

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
      <Button variant="contained" color="success" onClick={() => onClickSaveButton()}>
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

      {regenerateModalOpen && <RegenerateModal onChangeLevel={onClickRegenerateWithLevel} onClose={() => setRegenerateModalOpen(false)} />}
      {saveModalOpen && <SaveModal onClose={() => setSaveModalOpen(false)} />}
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

interface RegenerateModalProps {
  onChangeLevel: Function;
  onClose: Function;
}

const RegenerateModal = ({ onChangeLevel, onClose }: RegenerateModalProps) => {
  const onClickLevelButton = async (level: RegenerateLevel) => {
    onClose();
    await onChangeLevel(level);
  };

  const colors: any[] = ["success", "error", "secondary", "info"];

  return (
    <ModalWrapper>
      <h3>How do you want to regenerate?</h3>
      {Object.values(RegenerateLevel).map((level: RegenerateLevel, index: number) => {
        return (
          <>
            <Button onClick={() => onClickLevelButton(level)} color={colors[index]} variant="outlined">
              {level}
            </Button>
            <span style={{ margin: "0 10px" }}></span>
          </>
        );
      })}
      <Button onClick={() => onClose()} variant="outlined" color="warning">
        Cancel
      </Button>
    </ModalWrapper>
  );
};

interface SaveModalProps {
  onClose: Function;
}

const SaveModal = ({ onClose }: SaveModalProps) => {
  const [selectedDeck, setSelectedDeck] = useState();
  const decks: FlashCardDeck[] = useContext(DeckContext);

  const handleSelect = (event) => {
    setSelectedDeck(event.target.value);
  };

  const handleOnSave = () => {};

  return (
    <ModalWrapper>
      <select id="deckSelect" value={selectedDeck} onChange={handleSelect}>
        <option value="">-- Select --</option>
        {decks.map((deck: FlashCardDeck) => {
          return (
            <option key={deck.id} value={deck.name}>
              {deck.name}
            </option>
          );
        })}
      </select>
      <br />
      <Button onClick={() => handleOnSave()} variant="outlined">
        Save
      </Button>
      <span style={{ margin: "0 10px" }}></span>
      <Button onClick={() => onClose()} variant="outlined" color="warning">
        Cancel
      </Button>
    </ModalWrapper>
  );
};
