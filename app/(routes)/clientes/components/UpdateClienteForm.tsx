"use client";

import { Cliente } from "@/src/types/cliente/Cliente";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { updateCliente } from "@/src/lib/utils/clientes/updateCliente";
import { useMutation, useQuery } from "react-query";
import { getCliente } from "@/src/lib/utils/clientes/getCliente";
import { ClienteFormBase } from "./ClienteFormBase";
import { SuccessNotification } from "@/src/components/notifications/SuccessNotification";
import { ErrorNotification } from "@/src/components/notifications/ErrorNotification";
import { CreateCliente } from "@/src/types/cliente/CreateCliente";
import { useRouter } from "next/navigation";

type ClienteFormProps = {
  clienteId: Cliente["id"];
};

export function UpdateClienteForm(props: ClienteFormProps) {
  const router = useRouter();
  const { clienteId } = props;

  const { data } = useQuery("cliente", () => getCliente(clienteId));

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: (data: CreateCliente) => {
      return updateCliente(clienteId, data);
    },
  });

  const onSubmit = async (formData: CreateCliente) => {
    await mutate({
      ...formData,
    });
    router.push("/clientes");
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
                defaultValues={data}
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
