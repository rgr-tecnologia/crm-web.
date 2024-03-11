"use client";
import { useRouter } from "next/navigation";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { OportunidadeFormBase } from "./OportunidadeBaseForm";
import { OportunidadeCreate } from "@/src/types/cliente/oportunidade/OportunidadeCreate";
import { Oportunidade } from "@/src/types/cliente/oportunidade/Oportunidade";

type UpdateOportunidadeFormProps = {
  clienteId: string;
  oportunidade: Oportunidade;
};

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export const UpdateOportunidadeForm = (props: UpdateOportunidadeFormProps) => {
  const { clienteId, oportunidade } = props;
  const { id } = oportunidade;

  const router = useRouter();

  const onSubmit = async (data: OportunidadeCreate) => {
    data.valor = Number(data.valor);

    const res = await fetch(
      `${BFF_URL}/clientes/${clienteId}/oportunidades/${id}`,
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
      router.push(`/clientes/${clienteId}/oportunidades`);
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
            <OportunidadeFormBase
              onSubmit={onSubmit}
              defaultValues={oportunidade}
              clienteId={clienteId}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
