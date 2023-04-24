import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { RouteComponent, Route } from "./RouteComponent.tsx";
import { Logo } from "./Logo.tsx";
import { UserMenu } from "./UserMenu.tsx";

const routes: Route[] = [
  { name: "Home", href: "/" },
  { name: "Decks", href: "/decks" },
  { name: "Learn", href: "/learn" },
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
