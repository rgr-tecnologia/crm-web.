"use client";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { createCliente } from "@/src/lib/utils/cliente/createCliente";
import { ClienteFormBase } from "./ClienteFormBase";
import { useMutation } from "react-query";
import { SuccessNotification } from "@/src/components/notifications/SuccessNotification";
import { ErrorNotification } from "@/src/components/notifications/ErrorNotification";
import { CreateCliente } from "@/src/types/cliente/CreateCliente";
import { useRouter } from "next/navigation";

export function CreateClienteForm() {
  const router = useRouter();
  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: (data: CreateCliente) => {
      return createCliente(data);
    },
  });

  const onSubmit = async (formData: CreateCliente) => {
    try {
      await mutate(formData);
      router.push("/clientes");
    } catch (error) {
      if (error instanceof Error) {
      }
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
      {isSuccess && (
        <SuccessNotification
          message="Cliente atualizado com sucesso!"
          open={isSuccess}
        />
      )}
      {isError && (
        <ErrorNotification
          message="Erro ao atualizar cliente!"
          open={isError}
        />
      )}
    </>
  );
}
