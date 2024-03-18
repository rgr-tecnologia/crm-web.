"use client";
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import { FilialCardList } from "./FilialCardList";
import { Filial } from "@/src/types/Filial";

type FiliaisListProps = {
  filiais: Filial[];
};

const orderFiliais = (Filiais: Filial[]) => {
  return Filiais.sort((a, b) => {
    const aDate = new Date(a.createdAt);
    const bDate = new Date(b.createdAt);
    return aDate.getTime() - bDate.getTime();
  });
};

export function FilialList({ filiais }: FiliaisListProps) {
  const content = filiais.length ? (
    <FilialCardList filiais={orderFiliais(filiais)} />
  ) : (
    <Typography>Nenhuma filial cadastrada</Typography>
  );

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      spacing={2}
    >
      <Grid
        container
        item
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid item>
          <Link href={"/filiais/novo"} passHref>
            <Button variant={"contained"}>Nova filial</Button>
          </Link>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          width: "100%",
        }}
      >
        {content}
      </Grid>
    </Grid>
  );
}
