"use client";

import { useEffect } from "react";
import {
  Button,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { OportunidadeEtapa } from "@/app/_types/_enums/OportunidadeEtapa";
import { ContratoCaracteristica } from "@/app/_types/_enums/ContratoCaracteristica";
import { AreaExecutora } from "@/app/_types/_enums/AreaExecutora";
import { LeadOportunidadeCreate } from "@/app/_types/prospeccao/oportunidade/OportunidadeCreate";
import { getRepresentantesProspeccao } from "@/app/_lib/utils/representante/getRepresententantesProspeccao";
import { useQuery } from "react-query";

type LeadOportunidadeFormBaseProps = {
  onSubmit: (data: LeadOportunidadeCreate) => void;
  defaultValues?: LeadOportunidadeCreate;
  clienteProspeccaoId: string;
};

export const LeadOportunidadeFormBase = (
  props: LeadOportunidadeFormBaseProps
) => {
  const { defaultValues, onSubmit, clienteProspeccaoId } = props;

  const representantes = useQuery("representantes", async () =>
    getRepresentantesProspeccao({
      clienteProspeccaoId,
    })
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<LeadOportunidadeCreate>({
    defaultValues: {
      etapa: OportunidadeEtapa.NEGOCIACAO,
      dataFechamentoPrevista: new Date(),
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
            name="representanteProspeccaoId"
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
        {watch("etapa") !== OportunidadeEtapa.PERDIDO &&
          OportunidadeEtapa.CONLUIDO && (
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Salvar
              </Button>
            </Grid>
          )}
      </Grid>
    </form>
  );
};
