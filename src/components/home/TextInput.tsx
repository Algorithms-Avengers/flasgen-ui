import React from "react";

type TextInputProps = {
  onChangePage: Function;
};

export const TextInput = ({ onChangePage }: TextInputProps) => {
  return (
    <>
      <h1>Text input</h1>
      <button onClick={() => onChangePage()}>Change Route</button>
    </>
  );
};
