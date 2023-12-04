"use client";

import { Button, Grid, MenuItem, Select, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { Contrato } from "@/app/_types/Contrato";
import { useForm } from "react-hook-form";

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

type ContratoFormBaseProps = {
  onSubmit: (data: any) => void;
};

export const ContratoFormBase = (props: ContratoFormBaseProps) => {
  const { onSubmit } = props;

  const { control, handleSubmit } = useForm<Contrato>({
    defaultValues: {
      representanteId: "",
      titulo: "",
      caracteristica: "",
      valor: 0,
      dataInicio: new Date(),
      dataFimPrevista: new Date(),
      status: "ATIVO",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} direction={"column"}>
        <Grid item>
          <Controller
            name="representanteId"
            control={control}
            render={({ field }) => (
              <TextField
                label="Representante"
                variant="outlined"
                {...field}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="titulo"
            control={control}
            render={({ field }) => (
              <TextField
                label="Titulo"
                variant="outlined"
                {...field}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="caracteristica"
            control={control}
            render={({ field }) => (
              <TextField
                label="Característica"
                variant="outlined"
                {...field}
                fullWidth
              />
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
                type="number"
                inputProps={{
                  step: 0.01,
                }}
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="dataInicio"
            control={control}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Data de início"
                  {...field}
                  value={dayjs(field.value)}
                  sx={{ width: "100%" }}
                />
              </LocalizationProvider>
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="dataFimPrevista"
            control={control}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Data de fim prevista"
                  {...field}
                  value={dayjs(field.value)}
                  sx={{ width: "100%" }}
                />
              </LocalizationProvider>
            )}
          />
        </Grid>

        <Grid item>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <Select label="Status" variant="outlined" {...field} fullWidth>
                <MenuItem value="ATIVO">Ativo</MenuItem>
                <MenuItem value="INATIVO">Inativo</MenuItem>
              </Select>
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
