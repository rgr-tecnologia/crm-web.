"use client";

import { Button, FormHelperText, Grid, MenuItem, Select } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { OportunidadeEtapa } from "@/src/types/enums/OportunidadeEtapa";
import "dayjs/locale/pt-br";
import { ContratoCaracteristica } from "@/src/types/enums/ContratoCaracteristica";
import { AreaExecutora } from "@/src/types/enums/AreaExecutora";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pt-br";
import dayjs from "dayjs";
import { useEffect } from "react";
import {
  CreateOportunidade,
  CreateOportunidadeSchema,
} from "@/src/types/Oportunidade";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextField } from "@/src/components/FormTextField";
import { Representate } from "@/src/types/Representante";

type OportunidadeFormBaseProps = {
  representantes: Representate[];
  onSubmit: (data: CreateOportunidade) => void;
  defaultValues?: CreateOportunidade;
};

export const OportunidadeFormBase = (props: OportunidadeFormBaseProps) => {
  const { representantes, onSubmit, defaultValues } = props;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<CreateOportunidade>({
    resolver: zodResolver(CreateOportunidadeSchema),
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormTextField control={control} name="titulo" label="Título" />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="representanteId"
            control={control}
            render={({ field }) => (
              <Select fullWidth {...field} label="Representante">
                {representantes?.map((representante) => (
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
            render={({ field }) => (
              <>
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
                </Select>
                <FormHelperText>{errors.areaExecutora?.message}</FormHelperText>
              </>
            )}
          />
        </Grid>

        <Grid item>
          <Controller
            name="dataFechamentoPrevista"
            control={control}
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
            render={({ field }) => (
              <FormTextField name="valor" label="Valor" control={control} />
            )}
          />
        </Grid>

        {getValues("etapa") === OportunidadeEtapa.NEGOCIACAO && (
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
