"use client";

import { Cliente } from "@/app/_types/Cliente";
import { Card, CardContent, Typography } from "@mui/material";
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
        <Typography variant="h6">Criar cliente</Typography>
        <ClienteFormBase onSubmit={onSubmit} />
      </CardContent>
    </Card>
  );
}
