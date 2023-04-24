import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface RouteComponentProps {
  routes: Route[];
}

export interface Route {
  name: string;
  href: string;
}

export const RouteComponent = ({ routes }: RouteComponentProps) => {
  const navigate = useNavigate();
  const redirectRoute = (route: string) => {
    navigate(route);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {routes.map((route: Route) => (
        <Button key={route.name} onClick={() => redirectRoute(route.href)} sx={{ my: 2, color: "white", display: "block" }}>
          {route.name}
        </Button>
      ))}
    </Box>
  );
};
