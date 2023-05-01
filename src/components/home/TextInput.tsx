import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

type TextInputProps = {
  onChangePage: Function;
};

const FLASHCARD_GENERATOR_API = "https://1fyijkhfxa.execute-api.us-west-2.amazonaws.com/default/flashcard_ml_management";

export const TextInput = ({ onChangePage }: TextInputProps) => {
  const [inputText, setInputText] = useState<string>("hello");

  const onClickButton = async () => {
    console.log("Clicked");
    const { data } = await axios.post(FLASHCARD_GENERATOR_API, {
      text: inputText,
    });
  };

  return (
    <div style={{ textAlign: "center", fontSize: "1.5em" }}>
      <h1>Questions</h1>
      <TextArea onChange={setInputText} value={inputText} />
      <br />
      <Button variant="contained" onClick={() => onClickButton()}>
        Generate Flashcards
      </Button>
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
