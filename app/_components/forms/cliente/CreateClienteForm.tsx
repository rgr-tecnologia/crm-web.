"use client";

import { Cliente } from "@/app/_types/Cliente";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { createCliente } from "../../../_lib/createCliente";
import { ClienteFormBase } from "./ClienteFormBase";
import { useMutation } from "react-query";

export function CreateClienteForm() {
  const { isLoading, mutate, isError, isSuccess } = useMutation({
    mutationFn: (data: Omit<Cliente, "id">) => {
      return createCliente(data);
    },
  });

  const onSubmit = async (formData: Omit<Cliente, "id">) => {
    try {
      await mutate(formData);
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
            <ClienteFormBase
              onSubmit={onSubmit}
              isLoading={isLoading}
              isError={isError}
              isSuccess={isSuccess}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
