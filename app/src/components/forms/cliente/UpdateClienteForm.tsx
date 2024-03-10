"use client";

import { Cliente } from "@/app/_types/cliente/Cliente";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { updateCliente } from "../../../_lib/utils/cliente/updateCliente";
import { useMutation, useQuery } from "react-query";
import { getCliente } from "@/app/_lib/utils/cliente/getCliente";
import { ClienteFormBase } from "./ClienteFormBase";
import { SuccessNotification } from "../../notifications/SuccessNotification";
import { ErrorNotification } from "../../notifications/ErrorNotification";
import { CreateCliente } from "@/app/_types/cliente/CreateCliente";
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
