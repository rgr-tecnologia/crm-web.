"use client";
import { useRouter } from "next/navigation";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { OportunidadeFormBase } from "./OportunidadeBaseForm";
import { CreateOportunidade, Oportunidade } from "@/src/types/Oportunidade";
import { updateOportunidade } from "@/(routes)/(prospeccoes)/oportunidades/actions";
import { Representate } from "@/src/types/Representante";
import { useState } from "react";
import { ErrorNotification } from "@/src/components/notifications/ErrorNotification";

type UpdateOportunidadeFormProps = {
  oportunidade: Oportunidade;
  representantes: Representate[];
};

export const UpdateOportunidadeForm = (props: UpdateOportunidadeFormProps) => {
  const { oportunidade, representantes } = props;
  const router = useRouter();

  const [isError, setIsError] = useState(false);

  const onSubmit = async (data: CreateOportunidade) => {
    try {
      data.valor = Number(data.valor);
      const res = await updateOportunidade(oportunidade.id, data);
      if (res) {
        router.push(`/clientes/${res.clienteId}/oportunidades`);
      }
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
              <Typography variant="h6">Atualizar oportunidade</Typography>
            </Grid>
            <Grid item>
              <OportunidadeFormBase
                onSubmit={onSubmit}
                defaultValues={oportunidade}
                representantes={representantes}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {isError && (
        <ErrorNotification
          message="Erro ao atualizar oportunidade!"
          open={isError}
          onClose={() => setIsError(false)}
        />
      )}
    </>
  );
};
