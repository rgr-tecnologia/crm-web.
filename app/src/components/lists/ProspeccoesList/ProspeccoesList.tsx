"use client";
import { useState } from "react";
import Link from "next/link";

import { Button, Grid, Typography } from "@mui/material";

import { ProspeccoesAutoComplete } from "../../autocomplete/ProspeccoesAutoComplete";
import { ProspeccoesCardList } from "./ProspeccoesCardList";
import { Prospeccao } from "@/src/types/prospeccao/Prospeccao";

type ProspeccoesListProps = {
  prospeccoes: Prospeccao[];
};

const orderProspeccoes = (prospeccoes: Prospeccao[]) => {
  return prospeccoes.sort((a, b) => {
    const aDate = new Date(a.createdAt);
    const bDate = new Date(b.createdAt);
    return aDate.getTime() - bDate.getTime();
  });
};

export function ProspeccoesList({ prospeccoes }: ProspeccoesListProps) {
  const [filteredProspeccoes, setFilteredProspeccoes] =
    useState<Prospeccao[]>(prospeccoes);

  const onChange = (prospeccoes: Prospeccao) => {
    setFilteredProspeccoes([prospeccoes]);
  };

  const onClear = () => {
    setFilteredProspeccoes(prospeccoes);
  };

  const content = filteredProspeccoes.length ? (
    <ProspeccoesCardList prospeccoes={orderProspeccoes(filteredProspeccoes)} />
  ) : (
    <Typography>Nenhuma prospecção cadastrada</Typography>
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
        <Grid item xs={6}>
          <ProspeccoesAutoComplete
            prospeccoes={prospeccoes}
            onChange={onChange}
            onClear={onClear}
          />
        </Grid>
        <Grid item>
          <Link href={"/prospeccoes/novo"} passHref>
            <Button variant={"contained"}>Nova prospecção</Button>
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
