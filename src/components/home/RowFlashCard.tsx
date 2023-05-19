import { Button, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import { FlashCardData } from "../data/FlashCardData";
import { ModalWrapper } from "../helpers/PromptWrapper";

interface RowFlashCardProps {
  flashcard: FlashCardData;
  index: any;
  modifyFlashCard: any;
}

export const RowFlashCard = ({ flashcard, index, modifyFlashCard }: RowFlashCardProps) => {
  const MAX_LENGTH = 50;
  const optionalDots = flashcard.question.length >= MAX_LENGTH ? "...?" : "?";
  const [modalOpen, setModalOpen] = useState(false);

  function handleButtonClick() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  return (
    <div style={{ display: "flex", marginLeft: "20px" }}>
      <div style={{ display: "flex", flex: 1, fontSize: "1.2em" }}>
        <p>
          {flashcard.question.slice(0, MAX_LENGTH)}
          {optionalDots}
        </p>
      </div>
      <div style={{ marginLeft: "10px", marginRight: "20px" }}>
        <Button variant="contained" color="primary" onClick={() => handleButtonClick()}>
          SHOW
        </Button>
      </div>

      {modalOpen && <FlashCardModal index={index} flashcard={flashcard} onClose={handleCloseModal} modifyFlashCard={modifyFlashCard} />}
    </div>
  );
};

interface ActionButtonState {
  label: string;
  color: any;
}

interface FlashCardModalProps {
  index: any;
  flashcard: FlashCardData;
  onClose: any;
  modifyFlashCard: Function;
}

const FlashCardModal = ({ index, flashcard, onClose, modifyFlashCard }: FlashCardModalProps) => {
  const [disableEditBox, setDisableEditBox] = useState<boolean>(true);
  const [actionButtonState, setActionButtonState] = useState<ActionButtonState>({ label: "EDIT", color: "primary" });
  const [currentFlashcard, setCurrentFlashcard] = useState<FlashCardData>(flashcard);

  const onClickActionButton = () => {
    if (actionButtonState.label === "EDIT") {
      setDisableEditBox(false);
      setActionButtonState((prevState) => ({ ...prevState, label: "SAVE CHANGES", color: "success" }));
    } else {
      modifyFlashCard(index, currentFlashcard);
      onClose();
    }
  };

  return (
    <ModalWrapper>
      <h2>Edit Card</h2>
      <h3>Question</h3>
      <TextareaAutosize
        value={currentFlashcard.question}
        style={{ fontSize: "1.3em", width: "500px" }}
        disabled={disableEditBox}
        onChange={(e) => setCurrentFlashcard((prevState) => ({ ...prevState, question: e.target.value }))}
      />
      <h3>Answer</h3>
      <TextareaAutosize value={flashcard.answer} style={{ fontSize: "1.3em", width: "500px" }} disabled={disableEditBox} />
      <br />
      <br />
      <Button variant="contained" color={actionButtonState.color} onClick={onClickActionButton}>
        {actionButtonState.label}
      </Button>
      <span style={{ margin: "0 10px" }}></span>
      <Button variant="contained" onClick={onClose}>
        CLOSE
      </Button>
    </ModalWrapper>
  );
};
