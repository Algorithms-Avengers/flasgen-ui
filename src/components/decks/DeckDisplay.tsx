import React, { useContext } from "react";
import { FlashCardDeck } from "components/data/FlashCardData";
import { Button } from "@mui/material";
import "./DeckDisplay.css";
import { LearnContext } from "components/data/DataContext";
import { useNavigate } from "react-router";
import { RouteEnum } from "components/navigation/NavigationBar";

export const DeckDisplay = ({ deck }: { deck: FlashCardDeck }) => {
  const isPublic = true;
  const lastUpdateDate = new Date().toLocaleDateString();
  const { setLearnDeck } = useContext(LearnContext);
  const navigate = useNavigate();

  const onClickLearn = () => {
    setLearnDeck(deck);
    navigate(RouteEnum.LEARN_DECK);
  };

  return (
    <div className="deck-display-container">
      <div className="deck-info-container">
        <div>
          <h2 className="deck-name">{deck.name}</h2>
          <span className={`public-tag ${isPublic ? "public" : "private"}`}>{isPublic ? "Public" : "Private"}</span>
          <p className="last-update">Last Update: {lastUpdateDate}</p>
        </div>
      </div>
      <div className="button-container">
        <Button variant="outlined" onClick={() => onClickLearn()}>
          LEARN
        </Button>
        <Button variant="outlined">SETTING</Button>
        <Button variant="outlined">EDIT</Button>
      </div>
    </div>
  );
};
