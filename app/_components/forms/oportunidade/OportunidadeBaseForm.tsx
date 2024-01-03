"use client";

import {
  Button,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { OportunidadeCreate } from "@/app/_types/oportunidade/OportunidadeCreate";
import { OportunidadeEtapa } from "@/app/_types/_enums/OportunidadeEtapa";
import { getRepresentantesByClienteId } from "@/app/_lib/utils/representante/getRepresentantesByClienteId";
import { useQuery } from "react-query";
import "dayjs/locale/pt-br";
import { ContratoCaracteristica } from "@/app/_types/_enums/ContratoCaracteristica";
import { AreaExecutora } from "@/app/_types/_enums/AreaExecutora";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pt-br";
import dayjs from "dayjs";
import { useEffect } from "react";

type OportunidadeFormBaseProps = {
  onSubmit: (data: OportunidadeCreate) => void;
  defaultValues?: OportunidadeCreate;
  clienteId: string;
};

export const OportunidadeFormBase = (props: OportunidadeFormBaseProps) => {
  const { defaultValues, onSubmit, clienteId } = props;

  const representantes = useQuery("representantes", async () =>
    getRepresentantesByClienteId(clienteId)
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<OportunidadeCreate>({
    defaultValues: {
      etapa: OportunidadeEtapa.NEGOCIACAO,
      ...defaultValues,
    },
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues]);

  const rules = {
    required: "Campo obrigatório",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="titulo"
            control={control}
            rules={rules}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Título"
                error={!!errors.titulo}
                helperText={errors.titulo?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="representanteId"
            control={control}
            rules={rules}
            render={({ field }) => (
              <Select fullWidth {...field} label="Representante">
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
            name="caracteristica"
            control={control}
            rules={rules}
            render={({ field }) => (
              <Select
                {...field}
                fullWidth
                label="Característica"
                error={!!errors.caracteristica}
              >
                {Object.values(ContratoCaracteristica).map((caracteristica) => (
                  <MenuItem value={caracteristica} key={caracteristica}>
                    {caracteristica}
                  </MenuItem>
                ))}
                <FormHelperText>
                  {errors.caracteristica?.message}
                </FormHelperText>
              </Select>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="areaExecutora"
            control={control}
            rules={rules}
            render={({ field }) => (
              <Select
                {...field}
                fullWidth
                label="Área executora"
                error={!!errors.areaExecutora}
              >
                {Object.values(AreaExecutora).map((areaExecutora) => (
                  <MenuItem value={areaExecutora} key={areaExecutora}>
                    {areaExecutora}
                  </MenuItem>
                ))}
                <FormHelperText>{errors.areaExecutora?.message}</FormHelperText>
              </Select>
            )}
          />
        </Grid>

        <Grid item>
          <Controller
            name="dataFechamentoPrevista"
            control={control}
            rules={rules}
            render={({ field }) => (
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={"pt-br"}
              >
                <DatePicker
                  label="Data de fechamento prevista"
                  {...field}
                  value={dayjs(field.value)}
                  sx={{ width: "100%" }}
                />
                {errors.dataFechamentoPrevista && (
                  <FormHelperText error={!!errors.dataFechamentoPrevista}>
                    {errors.dataFechamentoPrevista?.message}
                  </FormHelperText>
                )}
              </LocalizationProvider>
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
                fullWidth
                label="Valor"
                error={!!errors.valor}
                helperText={errors.valor?.message}
                type="number"
              />
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
