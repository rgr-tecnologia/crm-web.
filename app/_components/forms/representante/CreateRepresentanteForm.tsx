"use client";
import { useRouter } from "next/navigation";

import { Card, CardContent, Grid, Typography } from "@mui/material";
import { RepresentanteFormBase } from "./RepresentanteFormBase";
import { Representate } from "@/app/_types/Representante";
import { RepresentateEndereco } from "@/app/_types/RepresentanteEndereco";
import { CreateRepresentante } from "@/app/_types/CreateRepresentante";

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

type CreateRepresentanteFormProps = {
  clienteId: string;
};

const createRepresentante = async (
  clienteId: string,
  data: CreateRepresentante
) => {
  const res = await fetch(`${BFF_URL}/clientes/${clienteId}/representantes`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 0,
    },
  });

  const json: Representate = await res.json();

  return json;
};

const createRepresentanteEndereco = async (
  clienteId: string,
  data: RepresentateEndereco
) => {
  const res = await fetch(`${BFF_URL}/clientes/${clienteId}/representantes`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 0,
    },
  });

  const json: Representate = await res.json();

  return json;
};

export const CreateRepresentanteForm = (
  props: CreateRepresentanteFormProps
) => {
  const { clienteId } = props;
  const router = useRouter();

  const onSubmit = async (data: Representate) => {
    const { id, endereco, ...representante } = data;
    try {
      await createRepresentante(clienteId, {
        ...representante,
        clienteId,
      });
      //await createRepresentanteEndereco(clienteId, endereco);

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container spacing={2} direction={"column"}>
      <Grid item>
        <Typography variant="h6">Novo contrato</Typography>
      </Grid>
      <Grid item>
        <Card>
          <CardContent>
            <Grid container spacing={2} direction={"column"}>
              <Grid item>
                <RepresentanteFormBase onSubmit={onSubmit} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
