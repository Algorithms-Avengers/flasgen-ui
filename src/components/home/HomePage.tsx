import React, { useState } from "react";

enum HomeRenderType {
  TEXT_INPUT,
  GENERATED_CARDS,
}

export const HomePage = () => {
  const [currentRenderType, setCurrentRenderType] = useState<HomeRenderType>(HomeRenderType.TEXT_INPUT);

  switch (currentRenderType) {
    case HomeRenderType.TEXT_INPUT:
      return <TextInput />;
    case HomeRenderType.GENERATED_CARDS:
      return <GeneratedCards />;
    default:
      return <TextInput />;
  }
};

const TextInput = () => {
  return <h1>Text input</h1>;
};

const GeneratedCards = () => {
  return <h1>Generated Cards</h1>;
};
