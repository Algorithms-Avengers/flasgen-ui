import React, { useState } from "react";

enum HomeRenderType {
  TEXT_INPUT,
  GENERATED_CARDS,
}

export const HomePage = () => {
  const [currentRenderType, setCurrentRenderType] = useState<HomeRenderType>(HomeRenderType.TEXT_INPUT);

  switch (currentRenderType) {
    case HomeRenderType.TEXT_INPUT:
      return <TextInput onChange={setCurrentRenderType} />;
    case HomeRenderType.GENERATED_CARDS:
      return <GeneratedCards onChange={setCurrentRenderType} />;
    default:
      return <TextInput onChange={setCurrentRenderType} />;
  }
};

type TextInputProps = {
  onChange: (type: HomeRenderType) => void;
};

const TextInput = ({ onChange }: TextInputProps) => {
  return (
    <>
      <h1>Text input</h1>
      <button onClick={() => onChange(HomeRenderType.GENERATED_CARDS)}>Change Route</button>
    </>
  );
};

const GeneratedCards = ({ onChange }: TextInputProps) => {
  return (
    <>
      <h1>Generated Card</h1>
      <button onClick={() => onChange(HomeRenderType.TEXT_INPUT)}>Change Route</button>
    </>
  );
};
