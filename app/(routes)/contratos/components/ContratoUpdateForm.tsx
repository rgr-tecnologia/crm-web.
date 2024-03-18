"use client";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { FilialFormBase } from "./ContratoFormBase";
import { ErrorNotification } from "@/src/components/notifications/ErrorNotification";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Filial, FilialCreate } from "@/src/types/Filial";
import { updateFilial } from "../actions";
import { Cliente } from "@/src/types/cliente/Cliente";

type FilialUpdateFormProps = {
  clientes: Cliente[];
  filial: Filial;
};

export function ContratoUpdateForm(props: FilialUpdateFormProps) {
  const router = useRouter();
  const { filial, clientes } = props;
  const [error, setError] = useState(false);

  const onSubmit = async (formData: FilialCreate) => {
    try {
      await updateFilial(filial.id, formData);
      router.push("/filiais");
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
              <Typography variant="h6">Editar filial</Typography>
            </Grid>
            <Grid item>
              <FilialFormBase
                clientes={clientes}
                onSubmit={onSubmit}
                defaultValues={filial}
                isLoading={false}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {error && (
        <ErrorNotification
          message="Erro ao atualizar filial!"
          open={false}
          onClose={() => setError(false)}
        />
      )}
    </>
  );
}
