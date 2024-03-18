"use client";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { ClienteFormBase } from "./ClienteFormBase";
import { ErrorNotification } from "@/src/components/notifications/ErrorNotification";
import { CreateCliente } from "@/src/types/cliente/CreateCliente";
import { useRouter } from "next/navigation";
import { createCliente } from "../actions";
import { useState } from "react";

export function CreateClienteForm() {
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const onSubmit = async (formData: CreateCliente) => {
    try {
      await createCliente(formData);
      router.push("/clientes");
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <>
      <Card>
        <CardContent>
          <Grid container spacing={2} direction={"column"}>
            <Grid item>
              <Typography variant="h6">Novo cliente</Typography>
            </Grid>
            <Grid item>
              <ClienteFormBase onSubmit={onSubmit} isLoading={false} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {isError && (
        <ErrorNotification
          message="Erro ao cadastrar cliente!"
          open={isError}
          onClose={() => setIsError(false)}
        />
      )}
    </>
  );
}
