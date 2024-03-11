"use client";

import { Grid, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { LoadingButton } from "../../loadingButton/LoadingButton";
import { CreateCliente } from "@/src/types/cliente/CreateCliente";
import { formatCnpj } from "@/src/lib/utils/data/formatCnpj";
import { isCnpjValid } from "@/src/lib/utils/data/isCnpjValid";
import { useEffect } from "react";

type ClienteFormProps = {
  onSubmit: (formData: CreateCliente) => void;
  defaultValues?: CreateCliente;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};

export function ClienteFormBase(props: ClienteFormProps) {
  const { onSubmit, defaultValues, isLoading } = props;

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CreateCliente>({
    defaultValues: {
      ativo: true,
      ...defaultValues,
    },
  });

  const rules = {
    required: "Campo obrigatório",
  };

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} direction={"column"}>
        <Grid item>
          <Controller
            name="nomeFantasia"
            control={control}
            rules={rules}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nome fantasia"
                variant="outlined"
                type="text"
                fullWidth
                helperText={errors.nomeFantasia?.message}
                error={!!errors.nomeFantasia}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        </Grid>
        <Grid item>
          <LoadingButton
            type="submit"
            variant="contained"
            color="primary"
            loading={isLoading}
            fullWidth
          >
            Salvar
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
}
