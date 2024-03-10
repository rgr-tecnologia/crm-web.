"use client";

import { AppBar, Container, Grid } from "@mui/material";
import React from "react";
import { Profile } from "./Profile";

export function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, padding: "0.5rem 0" }}
    >
      <Container>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item>
            <Profile />
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
