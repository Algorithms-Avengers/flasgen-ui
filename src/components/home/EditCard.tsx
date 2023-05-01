import React from "react";
import { Button } from "@mui/material";
import { HomeRenderType } from "./HomePage.tsx";

interface EditCardProps {
  onChangePage: Function;
}

export const EditCard = ({ onChangePage }: EditCardProps) => {
  return (
    <>
      <h1>This is the EditCard page</h1>
      <Button variant="contained" color="primary" onClick={() => onChangePage(HomeRenderType.GENERATED_CARDS)}>
        RETURN
      </Button>
    </>
  );
};
