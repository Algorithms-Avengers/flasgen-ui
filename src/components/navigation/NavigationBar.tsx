import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { RouteComponent, Route } from "./RouteComponent";
import { Logo } from "./Logo";
import { UserMenu } from "./UserMenu";

export enum RouteEnum {
  HOME_PAGE = "/",
  DECK_HOME = "/decks",
  LEARN_HOME = "/learn/home",
  LEARN_DECK = "/learn/deck",
}

const routes: Route[] = [
  { name: "Home", href: RouteEnum.HOME_PAGE },
  { name: "Decks", href: RouteEnum.DECK_HOME },
  { name: "Learn", href: RouteEnum.LEARN_HOME },
];

function NavigationBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <RouteComponent routes={routes} />
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavigationBar;
