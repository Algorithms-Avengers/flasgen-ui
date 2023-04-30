import React from "react";

type GeneratedCardsProps = {
  onChangePage: Function;
};

export const GeneratedCards = ({ onChangePage }: GeneratedCardsProps) => {
  return (
    <>
      <h1>Generated Card</h1>
      <button onClick={() => onChangePage()}>Change Route</button>
    </>
  );
};
