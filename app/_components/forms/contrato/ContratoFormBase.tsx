"use client";

import {
  Button,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { Contrato } from "@/app/_types/contrato/Contrato";
import { useForm } from "react-hook-form";

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useQuery } from "react-query";
import { getRepresentantesByClienteId } from "@/app/_lib/utils/representante/getRepresentantesByClienteId";
import { ContratoCaracteristica } from "@/app/_types/_enums/ContratoCaracteristica";

type ContratoFormBaseProps = {
  onSubmit: (data: any) => void;
  clienteId: string;
  defaultValues?: Contrato;
};

export const ContratoFormBase = (props: ContratoFormBaseProps) => {
  const { onSubmit, clienteId, defaultValues } = props;

  const representantes = useQuery("representantes", async () =>
    getRepresentantesByClienteId(clienteId)
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Contrato>({
    defaultValues: {
      dataInicio: new Date(),
      dataFimPrevista: new Date(),
      ativo: true,
      caracteristica: ContratoCaracteristica.MENSALIDADE,
      ...defaultValues,
    },
  });

  const rules = {
    required: "Campo obrigatório",
  };

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
                {Object.values(ContratoCaracteristica).map((etapa) => (
                  <MenuItem value={etapa} key={etapa}>
                    {etapa}
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
                type="number"
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
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={"pt-br"}
              >
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
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={"pt-br"}
              >
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
