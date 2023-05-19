import React, { useState } from "react";
import { ContextProvider } from "../data/ContextProvider.tsx";
import { FlashCardData } from "../data/FlashCardData";
import { GeneratedCards } from "./GeneratedCards.tsx";
import { TextInput } from "./TextInput.tsx";

export enum HomeRenderType {
  TEXT_INPUT,
  GENERATED_CARDS,
}

export const HomePage = () => {
  const [currentRenderType, setCurrentRenderType] = useState<HomeRenderType>(HomeRenderType.TEXT_INPUT);
  const [flashcards, setFlashcards] = useState<FlashCardData>();
  const [searchText, setSearchText] = useState<string>("");

  switch (currentRenderType) {
    case HomeRenderType.TEXT_INPUT:
      return (
        <ContextProvider>
          <TextInput
            onChangePage={(pageType: HomeRenderType) => setCurrentRenderType(pageType)}
            onChangeFlashcards={setFlashcards}
            searchText={searchText}
            onChangeSearchText={setSearchText}
          />
        </ContextProvider>
      );
    case HomeRenderType.GENERATED_CARDS:
      return (
        <ContextProvider>
          <GeneratedCards
            onChangePage={(pageType: HomeRenderType) => setCurrentRenderType(pageType)}
            flashcards={flashcards}
            searchText={searchText}
            onChangeFlashcards={setFlashcards}
          />
        </ContextProvider>
      );
    default:
      return (
        <ContextProvider>
          <TextInput
            onChangePage={(pageType: HomeRenderType) => setCurrentRenderType(pageType)}
            onChangeFlashcards={setFlashcards}
            searchText={searchText}
            onChangeSearchText={setSearchText}
          />
        </ContextProvider>
      );
  }
};
