import { AppBar, Container, Grid } from "@mui/material";
import React from "react";
import { MainMenu } from "./mainMenu";
import { Profile } from "./Profile";

export function Header() {
  return (
    <AppBar position="relative">
      <Container>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item>
            <MainMenu />
          </Grid>
          <Grid item>
            <Profile />
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
