"use client";

import { Button, Grid, Typography } from "@mui/material";
import { Contrato } from "../../../_types/contrato/Contrato";
import Link from "next/link";
import { useState } from "react";
import { ContratosCardList } from "./ContratosCardList";

type ContratoListProps = {
  contratos: Contrato[];
  viewMode?: boolean;
};

const orderContratos = (clientes: Contrato[]) => {
  return clientes.sort((a, b) => {
    const aDate = new Date(a.createdAt);
    const bDate = new Date(b.createdAt);
    return aDate.getTime() - bDate.getTime();
  });
};

export function ContratosList({ contratos, viewMode }: ContratoListProps) {
  const [filteredContratos, setFilteredContratos] =
    useState<Contrato[]>(contratos);

  const onChange = (contrato: Contrato) => {
    setFilteredContratos([contrato]);
  };

  const onClear = () => {
    setFilteredContratos(contratos);
  };

  const content = contratos.length ? (
    <ContratosCardList
      contratos={orderContratos(contratos)}
      viewMode={viewMode}
    />
  ) : (
    <Typography>Nenhum contrato cadastrado</Typography>
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
        {/* <Grid item xs={6}>
          <ClienteAutoComplete
            clientes={clientes}
            onChange={onChange}
            onClear={onClear}
          />
        </Grid> */}
        {viewMode && (
          <Grid item>
            <Link href={"contratos/novo"} passHref>
              <Button variant={"contained"}>Novo contrato</Button>
            </Link>
          </Grid>
        )}
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
