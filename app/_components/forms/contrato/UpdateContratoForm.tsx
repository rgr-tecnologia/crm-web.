"use client";
import { Contrato } from "@/app/_types/Contrato";
import { Button, Grid, TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useQuery } from "react-query";

type UpdateContratoFormProps = {
  onSubmit: (data: any) => void;
  contratoId: Contrato["id"];
};

const BFF_URL = process.env.BFF_URL;

export const UpdateContratoForm = (props: UpdateContratoFormProps) => {
  const { onSubmit, contratoId } = props;
  const { control, handleSubmit, reset } = useForm<Contrato>();

  const { data: contrato } = useQuery<Contrato>("contrato", () =>
    fetch(`${BFF_URL}/contratos/${contratoId}`).then((res) => res.json())
  );

  useEffect(() => {
    reset(contrato);
  }, [contrato]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        <Grid item>
          <Controller
            name="titulo"
            control={control}
            render={({ field }) => (
              <TextField label="Nome" variant="outlined" {...field} />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="valor"
            control={control}
            render={({ field }) => (
              <TextField label="Valor" variant="outlined" {...field} />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="dataInicio"
            control={control}
            render={({ field }) => (
              <TextField label="Data de início" variant="outlined" {...field} />
            )}
          />
        </Grid>
        <Button variant={"contained"} type="submit">
          Salvar
        </Button>
      </Grid>
    </form>
  );
};
