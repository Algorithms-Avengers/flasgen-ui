import { Button } from "@mui/material";
import React, { useState } from "react";
import { FlashCardData } from "../data/FlashCardData";

interface RowFlashCardProps {
  flashcard: FlashCardData;
}

export const RowFlashCard = ({ flashcard }: RowFlashCardProps) => {
  const MAX_LENGTH = 50;
  const optionalDots = flashcard.question.length >= MAX_LENGTH ? "...?" : "";
  const [modalOpen, setModalOpen] = useState(false);

  function handleButtonClick() {
    setModalOpen(true); // Open the modal
  }

  function handleCloseModal() {
    setModalOpen(false); // Close the modal
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

      {modalOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "1000",
          }}
        >
          <FlashCardModal flashcard={flashcard} onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
};

const FlashCardModal = (props) => {
  const { flashcard, onClose } = props;

  // Render the modal contents here
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
        zIndex: "1000",
      }}
    >
      <h2>{flashcard.question}</h2>
      <p>{flashcard.answer}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
