import React from "react";

type TextInputProps = {
  onChange: Function;
};

export const TextInput = ({ onChange }: TextInputProps) => {
  return (
    <>
      <h1>Text input</h1>
      <button onClick={() => onChange()}>Change Route</button>
    </>
  );
};
