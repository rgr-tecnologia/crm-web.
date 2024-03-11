"use client";
import { useRouter } from "next/navigation";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { LeadOportunidadeFormBase } from "./LeadOportunidadeBaseForm";
import { LeadOportunidade } from "@/src/types/prospeccao/oportunidade/Oportunidade";
import { LeadOportunidadeCreate } from "@/src/types/prospeccao/oportunidade/OportunidadeCreate";

type LeadUpdateOportunidadeFormProps = {
  oportunidade: LeadOportunidade;
};

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export const LeadUpdateOportunidadeForm = (
  props: LeadUpdateOportunidadeFormProps
) => {
  const { oportunidade } = props;
  const { clienteProspeccaoId: prospeccaoId } = oportunidade;
  const { id } = oportunidade;

  const router = useRouter();

  const onSubmit = async (data: LeadOportunidadeCreate) => {
    data.valor = Number(data.valor);

    const res = await fetch(
      `${BFF_URL}/prospeccoes/${prospeccaoId}/oportunidades/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 0,
        },
      }
    );

    if (res.ok) {
      router.push(`/prospeccoes/${prospeccaoId}/oportunidades`);
    }
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} direction={"column"}>
          <Grid item>
            <Typography variant="h6">Atualizar oportunidade</Typography>
          </Grid>
          <Grid item>
            <LeadOportunidadeFormBase
              onSubmit={onSubmit}
              defaultValues={oportunidade}
              clienteProspeccaoId={prospeccaoId}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
