"use client";

import { Contrato } from "@/src/types/contrato/Contrato";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { ContratoFormBase } from "./ContratoFormBase";
import { Cliente } from "@/src/types/cliente/Cliente";
import { useRouter } from "next/navigation";

type UpdateContratoFormProps = {
  contratoId: Contrato["id"];
  clienteId: Cliente["id"];
};

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export const UpdateContratoForm = (props: UpdateContratoFormProps) => {
  const { contratoId, clienteId } = props;

  const router = useRouter();

  const { data: contrato } = useQuery<Contrato>("contrato", () =>
    fetch(`${BFF_URL}/clientes/${clienteId}/contratos/${contratoId}`).then(
      (res) => res.json()
    )
  );

  const onSubmit = async (data: Contrato) => {
    const res = await fetch(
      `${BFF_URL}/clientes/${clienteId}/contratos/${contratoId}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.ok) {
      router.push(`/clientes/${clienteId}/contratos`);
    }
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} direction={"column"}>
          <Grid item>
            <Typography variant="h6">Atualizar contrato</Typography>
          </Grid>
          <Grid item>
            <ContratoFormBase
              onSubmit={onSubmit}
              clienteId={clienteId}
              defaultValues={contrato}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
