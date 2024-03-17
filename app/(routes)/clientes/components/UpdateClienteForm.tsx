"use client";

import { Cliente } from "@/src/types/cliente/Cliente";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { ClienteFormBase } from "./ClienteFormBase";
import { ErrorNotification } from "@/src/components/notifications/ErrorNotification";
import { useRouter } from "next/navigation";
import { updateCliente } from "../actions";
import { useState } from "react";

type ClienteFormProps = {
  cliente: Cliente;
};

export function UpdateClienteForm(props: ClienteFormProps) {
  const router = useRouter();
  const { cliente } = props;
  const [error, setError] = useState(false);

  const onSubmit = async (formData: Cliente) => {
    try {
      await updateCliente(cliente.id, formData);
      router.push("/clientes");
    } catch (e) {
      setError(true);
    }
  };

  return (
    <>
      <Card>
        <CardContent>
          <Grid container spacing={2} direction={"column"}>
            <Grid item>
              <Typography variant="h6">Editar cliente</Typography>
            </Grid>
            <Grid item>
              <ClienteFormBase
                onSubmit={onSubmit}
                defaultValues={cliente}
                isLoading={false}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {error && (
        <ErrorNotification message="Erro ao atualizar cliente!" open={false} />
      )}
    </>
  );
}
