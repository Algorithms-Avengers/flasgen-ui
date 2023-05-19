import React, { useState } from "react";
import { generateFlashCards } from "../data/FlashCardData";
import { HomeRenderType } from "./HomePage";
import { LoadingButton } from "@mui/lab";

type TextInputProps = {
  onChangePage: Function;
  onChangeFlashcards: Function;
  searchText: string;
  onChangeSearchText: Function;
};

interface RegenerateButtonState {
  color: any;
  isLoading: boolean;
}

export const TextInput = ({ onChangePage, onChangeFlashcards, searchText, onChangeSearchText }: TextInputProps) => {
  const [regenerateButtonState, setRegenerateButtonState] = useState<RegenerateButtonState>({ color: "primary", isLoading: false });

  const onClickButton = async () => {
    // Wait for flash cards to be generated
    setRegenerateButtonState((prevState) => ({ ...prevState, isLoading: true }));
    const flashCards = await generateFlashCards(searchText, {});

    // Set loading to false
    setRegenerateButtonState((prevState) => ({ ...prevState, isLoading: false }));

    // Update flashcard
    onChangeFlashcards(flashCards);
    onChangePage(HomeRenderType.GENERATED_CARDS);
  };

  return (
    <div style={{ textAlign: "center", fontSize: "1.5em" }}>
      <h1>Questions</h1>
      <TextArea onChange={onChangeSearchText} value={searchText} />
      <br />
      <LoadingButton variant="contained" color={regenerateButtonState.color} loading={regenerateButtonState.isLoading} onClick={() => onClickButton()}>
        Generate Flashcards
      </LoadingButton>
    </div>
  );
};

interface TextAreaProps {
  onChange: any;
  value: string;
}

const TextArea = ({ onChange, value }: TextAreaProps) => {
  const handleInputText = (event) => {
    onChange(event?.target.value);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <textarea
        rows={6} // Set the number of rows to 6 for a bigger input field
        value={value}
        onChange={handleInputText}
        placeholder="Please provide your academic text here"
        style={{ maxWidth: "600px", width: "100%", padding: "10px" }} // Customize the styling here
      />
    </div>
  );
};
