"use client";

import { Cliente } from "@/app/_types/Cliente";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { createCliente } from "../../../_lib/createCliente";
import { ClienteFormBase } from "./ClienteFormBase";

export function CreateClienteForm() {
  const onSubmit = async (formData: Omit<Cliente, "id">) => {
    try {
      await createCliente(formData);
    } catch (error) {
      if (error instanceof Error) {
      }
    }
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} direction={"column"}>
          <Grid item>
            <Typography variant="h6">Novo cliente</Typography>
          </Grid>
          <Grid item>
            <ClienteFormBase onSubmit={onSubmit} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
