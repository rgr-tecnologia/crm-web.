"use client";

import { Button, FormHelperText, Grid, MenuItem, Select } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import "dayjs/locale/pt-br";
import { AreaExecutora } from "@/src/types/enums/AreaExecutora";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pt-br";
import dayjs from "dayjs";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextField } from "@/src/components/FormTextField";
import { Representate } from "@/src/types/Representante";
import { ContratoCreate, ContratoSchemaCreate } from "@/src/types/Contrato";
import { Filial } from "@/src/types/Filial";
import { ContratoCaracteristica } from "@/src/types/enums/ContratoCaracteristica";
import { Oportunidade } from "@/src/types/Oportunidade";
import { gerarContrato } from "../actions";
import { useRouter } from "next/navigation";

type GerarContratoFormProps = {
  oportunidade: Oportunidade;
  filiais: Filial[];
  defaultValues?: ContratoCreate;
};

export const GerarContratoForm = (props: GerarContratoFormProps) => {
  const router = useRouter();
  const { oportunidade, filiais, defaultValues } = props;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContratoCreate>({
    resolver: zodResolver(ContratoSchemaCreate),
    defaultValues: {
      filialId: filiais[0].id,
      caracteristica: ContratoCaracteristica[oportunidade.caracteristica],
      areaExecutora: AreaExecutora[oportunidade.areaExecutora],
      ...defaultValues,
    },
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues]);

  const onSubmit = async (data: ContratoCreate) => {
    const res = await gerarContrato(data);
    if (res) {
      router.push(`/contrato`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormTextField control={control} name="titulo" label="Título" />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="filialId"
            control={control}
            render={({ field }) => (
              <Select fullWidth {...field} label="Filial">
                {filiais?.map((filial) => (
                  <MenuItem value={filial.id} key={filial.id}>
                    {filial.nome}
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

        <Grid item xs={12}>
          <FormTextField name="valor" label="Valor" control={control} />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Salvar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
