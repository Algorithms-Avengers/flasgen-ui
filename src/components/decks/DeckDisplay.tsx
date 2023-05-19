import React from "react";
import { FlashCardDeck } from "components/data/FlashCardData";
import { Button } from "@mui/material";

export const DeckDisplay = ({ deck }: { deck: FlashCardDeck }) => {
  const isPublic = true;
  const lastUpdateDate = new Date().toLocaleDateString();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#f0f0f0",
        padding: "10px",
        borderRadius: "5px",
        width: "100%",
        maxWidth: "700px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <h2 style={{ marginBottom: "5px" }}>{deck.name}</h2>
          <span
            style={{
              display: "inline-block",
              padding: "4px 8px",
              borderRadius: "4px",
              backgroundColor: isPublic ? "green" : "red",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {isPublic ? "Public" : "Private"}
          </span>
          <p style={{ marginTop: "5px" }}>Last Update: {lastUpdateDate}</p>
        </div>
      </div>
      <div>
        <Button style={{ marginRight: "5px" }} variant="outlined">
          LEARN
        </Button>
        <Button style={{ marginRight: "5px" }} variant="outlined">
          SETTING
        </Button>
        <Button variant="outlined">EDIT</Button>
      </div>
    </div>
  );
};
