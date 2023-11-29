"use client";

import { Cliente } from "@/app/_types/Cliente";
import { Card, CardContent, Typography } from "@mui/material";
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
        <Typography variant="h6">Editar cliente</Typography>
        <ClienteFormBase onSubmit={onSubmit} defaultValues={data} />
      </CardContent>
    </Card>
  );
}
