"use client";
import { useRouter } from "next/navigation";

import { Card, CardContent, Grid, Typography } from "@mui/material";
import { OportunidadeFormBase } from "./OportunidadeBaseForm";
import { CreateOportunidade } from "@/src/types/Oportunidade";
import { Representate } from "@/src/types/Representante";
import { createOportunidade } from "../actions";
import { ErrorNotification } from "@/src/components/notifications/ErrorNotification";
import { useState } from "react";

type OportunidadeCreateFormProps = {
  clienteId: string;
  representantes: Representate[];
};

export const OportunidadeCreateForm = (props: OportunidadeCreateFormProps) => {
  const { representantes } = props;
  const router = useRouter();

  const [isError, setIsError] = useState(false);

  const onSubmit = async (data: CreateOportunidade) => {
    data.valor = Number(data.valor);

    const res = await createOportunidade(data);
    if (res) {
      router.push(`/clientes/${res.clienteId}/oportunidades`);
    }

    setIsError(true);
  };

  return (
    <>
      <Card>
        <CardContent>
          <Grid container spacing={2} direction={"column"}>
            <Grid item>
              <Typography variant="h6">Criar oportunidade</Typography>
            </Grid>
            <Grid item>
              <OportunidadeFormBase
                onSubmit={onSubmit}
                representantes={representantes}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {isError && (
        <ErrorNotification
          message="Erro ao cadastrar oportunidade!"
          open={isError}
          onClose={() => setIsError(false)}
        />
      )}
    </>
  );
};
