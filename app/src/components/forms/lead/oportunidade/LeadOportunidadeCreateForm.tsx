"use client";
import { useRouter } from "next/navigation";

import { Card, CardContent, Grid, Typography } from "@mui/material";
import { LeadOportunidadeFormBase } from "./LeadOportunidadeBaseForm";
import { LeadOportunidadeCreate } from "@/src/types/prospeccao/oportunidade/OportunidadeCreate";

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

type LeadOportunidadeCreateFormProps = {
  prospeccaoId: string;
};

export const LeadOportunidadeCreateForm = (
  props: LeadOportunidadeCreateFormProps
) => {
  const { prospeccaoId } = props;
  const router = useRouter();

  const onSubmit = async (data: LeadOportunidadeCreate) => {
    data.valor = Number(data.valor);

    const res = await fetch(
      `${BFF_URL}/prospeccoes/${prospeccaoId}/oportunidades`,
      {
        method: "POST",
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
      router.refresh();
      router.push(`/prospeccoes/${prospeccaoId}/oportunidades`);
    }
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} direction={"column"}>
          <Grid item>
            <Typography variant="h6">Criar oportunidade</Typography>
          </Grid>
          <Grid item>
            <LeadOportunidadeFormBase
              onSubmit={onSubmit}
              clienteProspeccaoId={prospeccaoId}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
