"use client";

import { Cliente } from "@/app/_types/Cliente";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { RepresentanteFormBase } from "./RepresentanteFormBase";
import { Representate } from "@/app/_types/representante/Representante";
import { getRepresentante } from "@/app/_lib/representante/getRepresentante";
import { updateRepresentante } from "@/app/_lib/representante/updateRepresentante";

type RepresentanteFormProps = {
  clienteId: Cliente["id"];
  representanteId: Representate["id"];
};

export function UpdateRepresentanteForm(props: RepresentanteFormProps) {
  const { clienteId, representanteId } = props;

  const { data } = useQuery("representante", () =>
    getRepresentante(clienteId, representanteId)
  );

  const onSubmit = async (formData: Representate) => {
    await updateRepresentante(clienteId, representanteId, formData);
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} direction={"column"}>
          <Grid item>
            <Typography variant="h6">Editar cliente</Typography>
          </Grid>
          <Grid item>
            <RepresentanteFormBase onSubmit={onSubmit} defaultValues={data} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
