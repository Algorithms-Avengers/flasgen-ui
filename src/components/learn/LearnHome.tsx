import { Button } from "@mui/material";
import { LearnContext, LearnContextType } from "components/data/DataContext";
import { fetchTodayLearnFlashcards, FlashCardData } from "components/data/FlashCardData";
import SpinningPage from "components/helpers/SpinningPage";
import { RouteEnum } from "components/navigation/NavigationBar";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./CardStatistic.css";

export const LearnHome = () => {
  const [todayLearnCards, setTodayLearnCards] = useState<FlashCardData[] | undefined>(undefined);
  const { setLearnDeck } = useContext(LearnContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCards = await fetchTodayLearnFlashcards();
      setTodayLearnCards(fetchedCards);
    };

    fetchData().catch();
  }, []);

  const onClickLearnNow = () => {
    setLearnDeck((prevState: LearnContextType) => ({ ...prevState, flashCards: todayLearnCards }));
    navigate(RouteEnum.LEARN_DECK);
  };

  if (todayLearnCards === undefined) {
    return <SpinningPage />;
  }

  return (
    <div className="card-statistics-container">
      <h1 className="card-statistics-title">LEARN CARDS</h1>
      <div className="card-statistics-box">
        <p>Total number of cards: {todayLearnCards.length}</p>
        <p>Cards remain: {todayLearnCards.length}</p>
        <p>Cards learned: 0</p>
      </div>
      <div className="button-container">
        <Button variant="outlined" onClick={() => onClickLearnNow()}>
          LEARN NOW
        </Button>
      </div>
    </div>
  );
};
