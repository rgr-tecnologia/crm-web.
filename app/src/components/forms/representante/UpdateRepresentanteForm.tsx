"use client";

import { Cliente } from "@/src/types/cliente/Cliente";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { RepresentanteFormBase } from "./RepresentanteFormBase";
import { Representate } from "@/src/types/Representante";
import { getRepresentante } from "@/src/lib/utils/representantes/getRepresentante";
import { updateRepresentante } from "@/src/lib/utils/representantes/updateRepresentante";

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
            <Typography variant="h6">Editar representante</Typography>
          </Grid>
          <Grid item>
            <RepresentanteFormBase
              onSubmit={onSubmit}
              defaultValues={data}
              isLoading={false}
              isError={false}
              isSuccess={false}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
