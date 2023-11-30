"use client";

import { Button, Grid, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { Contrato } from "@/app/_types/Contrato";
import { useForm } from "react-hook-form";

type ContratoFormBaseProps = {
  onSubmit: (data: any) => void;
};

export const ContratoFormBase = (props: ContratoFormBaseProps) => {
  const { onSubmit } = props;

  const { control, handleSubmit } = useForm<Contrato>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} direction={"column"}>
        <Grid item>
          <Controller
            name="titulo"
            control={control}
            render={({ field }) => (
              <TextField label="Nome" variant="outlined" {...field} fullWidth />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="valor"
            control={control}
            render={({ field }) => (
              <TextField
                label="Valor"
                variant="outlined"
                {...field}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="dataInicio"
            control={control}
            render={({ field }) => (
              <TextField
                label="Data de início"
                variant="outlined"
                {...field}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item>
          <Button variant={"contained"} type="submit" fullWidth>
            Salvar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
