"use client";

import { Cliente } from "@/app/_types/cliente/Cliente";
import { Button, Grid, Typography } from "@mui/material";
import { ClienteAutoComplete } from "../../autocomplete/ClienteAutoComplete";
import { ClientesCardList } from "./ClientesCardList";
import { useState } from "react";
import Link from "next/link";

type ClientesListProps = {
  clientes: Cliente[];
};

export function ClientesList({ clientes }: ClientesListProps) {
  const [filteredClientes, setFilteredClientes] = useState<Cliente[]>(clientes);

  const onChange = (cliente: Cliente) => {
    setFilteredClientes([cliente]);
  };

  const onClear = () => {
    setFilteredClientes(clientes);
  };

  if (!clientes.length) {
    return (
      <Grid item>
        <Typography>Nenhum cliente cadastrado</Typography>
      </Grid>
    );
  }

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
        <ClientesCardList clientes={filteredClientes} />
      </Grid>
    </Grid>
  );
}
