import React, { useState } from "react";
import { GeneratedCards } from "./GeneratedCards.tsx";
import { TextInput } from "./TextInput.tsx";

enum HomeRenderType {
  TEXT_INPUT,
  GENERATED_CARDS,
}

export const HomePage = () => {
  const [currentRenderType, setCurrentRenderType] = useState<HomeRenderType>(HomeRenderType.TEXT_INPUT);

  switch (currentRenderType) {
    case HomeRenderType.TEXT_INPUT:
      return <TextInput onChange={() => setCurrentRenderType(HomeRenderType.GENERATED_CARDS)} />;
    case HomeRenderType.GENERATED_CARDS:
      return <GeneratedCards onChange={() => setCurrentRenderType(HomeRenderType.TEXT_INPUT)} />;
    default:
      return <TextInput onChange={() => setCurrentRenderType(HomeRenderType.GENERATED_CARDS)} />;
  }
};
