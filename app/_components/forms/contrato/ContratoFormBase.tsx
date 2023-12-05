"use client";

import {
  Box,
  Button,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { Contrato } from "@/app/_types/Contrato";
import { useForm } from "react-hook-form";

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useQuery } from "react-query";
import { getRepresentantesByClienteId } from "@/app/_lib/representante/getRepresentantesByClienteId";
import { useEffect } from "react";

type ContratoFormBaseProps = {
  onSubmit: (data: any) => void;
  clienteId: string;
  defaultValues?: Contrato;
};

export const ContratoFormBase = (props: ContratoFormBaseProps) => {
  const { onSubmit, clienteId } = props;

  const representantes = useQuery("representantes", async () =>
    getRepresentantesByClienteId(clienteId)
  );

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Contrato>({
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

  const rules = {
    required: "Campo obrigatório",
  };

  useEffect(() => {
    reset(props.defaultValues);
  }, [props.defaultValues]);

  const _onSubmit = async (data: Contrato) => {
    const transformedData: Contrato = {
      ...data,
      valor: Number(data.valor),
    };
    onSubmit(transformedData);
  };

  return (
    <form onSubmit={handleSubmit(_onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="status"
            control={control}
            rules={rules}
            render={({ field }) => (
              <Box>
                <Select
                  {...field}
                  label="Status"
                  variant="outlined"
                  fullWidth
                  error={!!errors.status}
                >
                  <MenuItem value="ATIVO">Ativo</MenuItem>
                  <MenuItem value="INATIVO">Inativo</MenuItem>
                </Select>
                {errors.status && (
                  <FormHelperText>{errors.status.message} </FormHelperText>
                )}
              </Box>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="representanteId"
            control={control}
            rules={rules}
            render={({ field }) => (
              <Select fullWidth {...field}>
                {representantes.data?.map((representante) => (
                  <MenuItem value={representante.id} key={representante.id}>
                    {representante.nome}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="titulo"
            control={control}
            rules={rules}
            render={({ field }) => (
              <TextField
                {...field}
                label="Título"
                variant="outlined"
                fullWidth
                error={!!errors.titulo}
                helperText={errors.titulo ? errors.titulo.message : null}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="caracteristica"
            control={control}
            rules={rules}
            render={({ field }) => (
              <TextField
                {...field}
                label="Característica"
                variant="outlined"
                fullWidth
                error={!!errors.caracteristica}
                helperText={
                  errors.caracteristica ? errors.caracteristica.message : null
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="valor"
            control={control}
            rules={rules}
            render={({ field }) => (
              <TextField
                {...field}
                label="Valor"
                variant="outlined"
                fullWidth
                error={!!errors.valor}
                helperText={errors.valor ? errors.valor.message : null}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="dataInicio"
            control={control}
            rules={rules}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  {...field}
                  label="Data de Início"
                  value={dayjs(field.value)}
                  sx={{ width: "100%" }}
                />
              </LocalizationProvider>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="dataFimPrevista"
            control={control}
            rules={rules}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  {...field}
                  label="Data Fim Prevista"
                  value={dayjs(field.value)}
                  sx={{ width: "100%" }}
                />
              </LocalizationProvider>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Salvar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
