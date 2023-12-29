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
  } = useForm<OportunidadeCreate>({
    defaultValues: {
      etapa: OportunidadeEtapa.NEGOCIACAO,
      ...defaultValues,
    },
  });

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
            name="etapa"
            control={control}
            rules={rules}
            render={({ field }) => (
              <Select {...field} fullWidth label="Etapa" error={!!errors.etapa}>
                {Object.values(OportunidadeEtapa).map((etapa) => (
                  <MenuItem value={etapa} key={etapa}>
                    {etapa}
                  </MenuItem>
                ))}
                <FormHelperText>{errors.etapa?.message}</FormHelperText>
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
