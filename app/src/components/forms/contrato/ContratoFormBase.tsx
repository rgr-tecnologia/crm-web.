"use client";

import {
  FormControlLabel,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
  Checkbox,
  Button,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { Contrato } from "@/src/types/contrato/Contrato";
import { useForm } from "react-hook-form";

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useQuery } from "react-query";
import { getRepresentantesByClienteId } from "@/src/lib/utils/representante/getRepresentantesByClienteId";
import { ContratoCaracteristica } from "@/src/types/enums/ContratoCaracteristica";
import { Oportunidade } from "@/src/types/cliente/oportunidade/Oportunidade";
import { useEffect } from "react";

type ContratoFormBaseProps = {
  onSubmit: (data: any) => void;
  clienteId: string;
  defaultValues?: Partial<Contrato>;
};

export const ContratoFormBase = (props: ContratoFormBaseProps) => {
  const { onSubmit, clienteId, defaultValues } = props;

  const representantes = useQuery("representantes", async () =>
    getRepresentantesByClienteId(clienteId)
  );

  const oportunidades = useQuery("oportunidades", async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BFF_URL}/clientes/${clienteId}/oportunidades`
    );
    return res.json() as Promise<Oportunidade[]>;
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Contrato>({
    defaultValues: {
      dataInicio: new Date(),
      dataFimPrevista: new Date(),
      dataPagamento: new Date(),
      renovarAutomaticamente: false,
      ativo: true,
      caracteristica: ContratoCaracteristica.MENSALIDADE,
      representanteId: "",
      oportunidadeId: "",
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

  const _onSubmit = async (data: Contrato) => {
    const transformedData: Contrato = {
      ...data,
      valor: Number(data.valor),
      numeroParcelas: Number(data.numeroParcelas),
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
              <>
                <Select fullWidth {...field} label="Representante responsável">
                  {representantes.data?.map((representante) => (
                    <MenuItem value={representante.id} key={representante.id}>
                      {representante.nome}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  {errors.representanteId?.message}
                </FormHelperText>
              </>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="oportunidadeId"
            control={control}
            rules={rules}
            render={({ field }) => (
              <>
                <Select fullWidth {...field} label="Oportunidade referente">
                  {oportunidades.data?.map((oportunidade) => (
                    <MenuItem value={oportunidade.id} key={oportunidade.id}>
                      {oportunidade.titulo}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText error={true}>
                  {errors.oportunidadeId?.message}
                </FormHelperText>
              </>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="caracteristica"
            control={control}
            rules={rules}
            render={({ field }) => (
              <>
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
                </Select>
                <FormHelperText error={true}>
                  {errors.caracteristica?.message}
                </FormHelperText>
              </>
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
          <Controller
            name="dataPagamento"
            control={control}
            rules={rules}
            render={({ field }) => (
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={"pt-br"}
              >
                <DatePicker
                  {...field}
                  label="Data de pagamento"
                  value={dayjs(field.value)}
                  sx={{ width: "100%" }}
                />
              </LocalizationProvider>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="numeroParcelas"
            control={control}
            rules={rules}
            render={({ field }) => (
              <TextField
                {...field}
                label="Número de parcelas"
                variant="outlined"
                fullWidth
                error={!!errors.numeroParcelas}
                helperText={
                  errors.numeroParcelas ? errors.numeroParcelas.message : null
                }
                type="number"
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Controller
                name="renovarAutomaticamente"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                )}
              />
            }
            label="Renovar automaticamente?"
          />
          <FormHelperText error={!!errors.renovarAutomaticamente}>
            {errors.renovarAutomaticamente?.message}
          </FormHelperText>
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
