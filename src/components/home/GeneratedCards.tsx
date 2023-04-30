import React from "react";

type GeneratedCardsProps = {
  onChange: Function;
};

export const GeneratedCards = ({ onChange }: GeneratedCardsProps) => {
  return (
    <>
      <h1>Generated Card</h1>
      <button onClick={() => onChange()}>Change Route</button>
    </>
  );
};
