"use client";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { FilialFormBase } from "./FilialFormBase";
import { ErrorNotification } from "@/src/components/notifications/ErrorNotification";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createFilial } from "../actions";
import { FilialCreate } from "@/src/types/Filial";
import { Cliente } from "@/src/types/cliente/Cliente";

type FilialCreateFormProps = {
  clientes: Cliente[];
};

export function FilialCreateForm(props: FilialCreateFormProps) {
  const { clientes } = props;
  const router = useRouter();

  const [error, setError] = useState(false);

  const onSubmit = async (formData: FilialCreate) => {
    try {
      await createFilial(formData);
      router.push(`/filiais`);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <Card>
        <CardContent>
          <Grid container spacing={2} direction={"column"}>
            <Grid item>
              <Typography variant="h6">Nova filial</Typography>
            </Grid>
            <Grid item>
              <FilialFormBase
                clientes={clientes}
                onSubmit={onSubmit}
                isLoading={false}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {error && (
        <ErrorNotification
          message="Erro ao cadastrar cliente!"
          open={error}
          onClose={() => setError(false)}
        />
      )}
    </>
  );
}
