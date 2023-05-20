import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { RouteComponent, Route } from "./RouteComponent";
import { Logo } from "./Logo";
import { UserMenu } from "./UserMenu";

const routes: Route[] = [
  { name: "Home", href: "/" },
  { name: "Decks", href: "/decks" },
  { name: "Learn", href: "/learn/home" },
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
