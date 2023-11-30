"use client";

import { Cliente } from "@/app/_types/Cliente";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { updateCliente } from "../../../_lib/updateCliente";
import { useQuery } from "react-query";
import { getCliente } from "@/app/_lib/getCliente";
import { ClienteFormBase } from "./ClienteFormBase";

type ClienteFormProps = {
  clienteId: Cliente["id"];
};

export function UpdateClienteForm(props: ClienteFormProps) {
  const { clienteId } = props;

  const { data } = useQuery("cliente", () => getCliente(clienteId));

  const onSubmit = async (formData: Omit<Cliente, "id">) => {
    await updateCliente(clienteId, formData);
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} direction={"column"}>
          <Grid item>
            <Typography variant="h6">Editar cliente</Typography>
          </Grid>
          <Grid item>
            <ClienteFormBase onSubmit={onSubmit} defaultValues={data} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
