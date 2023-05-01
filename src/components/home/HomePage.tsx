import React, { useState } from "react";
import { FlashCardData } from "../data/FlashCardData";
import { GeneratedCards } from "./GeneratedCards.tsx";
import { TextInput } from "./TextInput.tsx";

enum HomeRenderType {
  TEXT_INPUT,
  GENERATED_CARDS,
}

export const HomePage = () => {
  const [currentRenderType, setCurrentRenderType] = useState<HomeRenderType>(HomeRenderType.TEXT_INPUT);
  const [flashcards, setFlashcards] = useState<FlashCardData>();

  switch (currentRenderType) {
    case HomeRenderType.TEXT_INPUT:
      return <TextInput onChangePage={() => setCurrentRenderType(HomeRenderType.GENERATED_CARDS)} onChangeFlashcards={setFlashcards} />;
    case HomeRenderType.GENERATED_CARDS:
      return <GeneratedCards onChangePage={() => setCurrentRenderType(HomeRenderType.TEXT_INPUT)} flashcards={flashcards} />;
    default:
      return <TextInput onChangePage={() => setCurrentRenderType(HomeRenderType.GENERATED_CARDS)} onChangeFlashcards={setFlashcards} />;
  }
};
