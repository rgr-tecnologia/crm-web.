"use client";
import { useRouter } from "next/navigation";

import { Card, CardContent, Grid, Typography } from "@mui/material";
import { OportunidadeFormBase } from "./OportunidadeBaseForm";
import { OportunidadeCreate } from "@/src/types/cliente/oportunidade/OportunidadeCreate";

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

type OportunidadeCreateFormProps = {
  clienteId: string;
};

export const OportunidadeCreateForm = (props: OportunidadeCreateFormProps) => {
  const { clienteId } = props;
  const router = useRouter();

  const onSubmit = async (data: OportunidadeCreate) => {
    data.valor = Number(data.valor);

    const res = await fetch(`${BFF_URL}/clientes/${clienteId}/oportunidades`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 0,
      },
    });

    if (!res.ok) {
      router.refresh();
      router.push(`/clientes/${clienteId}/oportunidades`);
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
            <OportunidadeFormBase onSubmit={onSubmit} clienteId={clienteId} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
