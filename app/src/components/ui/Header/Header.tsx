import { AppBar, Container, Grid } from "@mui/material";
import React from "react";
import { Profile } from "./Profile";
import { Claims } from "@auth0/nextjs-auth0";
import { useState } from "react";

type HeaderProps = {
  profile: Claims;
};

export function Header(props: HeaderProps) {
  const { profile } = props;

  return (
    <AppBar position="fixed" sx={{ zIndex: 999999999, padding: "0.5rem 0" }}>
      <Container>
        <Grid container justifyContent="flex-end" alignItems={"center"}>
          <Grid item>
            <Profile profile={profile} />
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
