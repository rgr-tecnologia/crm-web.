"use client";

import { Cliente } from "@/app/_types/Cliente";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { updateCliente } from "../../../_lib/updateCliente";
import { useMutation, useQuery } from "react-query";
import { getCliente } from "@/app/_lib/getCliente";
import { ClienteFormBase } from "./ClienteFormBase";

type ClienteFormProps = {
  clienteId: Cliente["id"];
};

export function UpdateClienteForm(props: ClienteFormProps) {
  const { clienteId } = props;

  const { data } = useQuery("cliente", () => getCliente(clienteId));

  const { status, mutate, isError, isSuccess } = useMutation({
    mutationFn: (data: Cliente) => {
      const { id, ...formData } = data;
      return updateCliente(clienteId, formData);
    },
  });

  const onSubmit = async (formData: Omit<Cliente, "id">) => {
    await mutate({
      ...formData,
      id: clienteId,
    });
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} direction={"column"}>
          <Grid item>
            <Typography variant="h6">Editar cliente</Typography>
          </Grid>
          <Grid item>
            <ClienteFormBase
              onSubmit={onSubmit}
              defaultValues={data}
              isLoading={status === "loading"}
              isError={isError}
              isSuccess={isSuccess}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
