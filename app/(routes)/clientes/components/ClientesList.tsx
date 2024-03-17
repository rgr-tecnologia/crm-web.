"use client";

import { Cliente } from "@/src/types/cliente/Cliente";
import { Button, Grid, Typography } from "@mui/material";
import { ClienteAutoComplete } from "../../../src/components/autocomplete/ClienteAutoComplete";
import { ClientesCardList } from "./ClientesCardList";
import { useState } from "react";
import Link from "next/link";

type ClientesListProps = {
  clientes: Cliente[];
};

const orderClientes = (clientes: Cliente[]) => {
  return clientes.sort((a, b) => {
    const aDate = new Date(a.createdAt);
    const bDate = new Date(b.createdAt);
    return aDate.getTime() - bDate.getTime();
  });
};

export function ClientesList({ clientes }: ClientesListProps) {
  const [filteredClientes, setFilteredClientes] = useState<Cliente[]>(clientes);

  const onChange = (cliente: Cliente) => {
    setFilteredClientes([cliente]);
  };

  const onClear = () => {
    setFilteredClientes(clientes);
  };

  const content = filteredClientes.length ? (
    <ClientesCardList clientes={orderClientes(filteredClientes)} />
  ) : (
    <Typography>Nenhum cliente cadastrado</Typography>
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
          <ClienteAutoComplete
            clientes={clientes}
            onChange={onChange}
            onClear={onClear}
          />
        </Grid>
        <Grid item>
          <Link href={"/clientes/novo"} passHref>
            <Button variant={"contained"}>Novo Cliente</Button>
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
