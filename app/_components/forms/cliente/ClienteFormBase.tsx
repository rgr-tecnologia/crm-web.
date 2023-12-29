"use client";

import { Grid, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { LoadingButton } from "../../loadingButton/LoadingButton";
import { CreateCliente } from "@/app/_types/cliente/CreateCliente";
import { formatCnpj } from "@/app/_lib/utils/data/formatCnpj";
import { isCnpjValid } from "@/app/_lib/utils/data/isCnpjValid";

type ClienteFormProps = {
  onSubmit: (formData: CreateCliente) => void;
  defaultValues?: Partial<CreateCliente>;
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
      ...defaultValues,
      ativo: true,
    },
  });

  const rules = {
    required: "Campo obrigatório",
  };

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
          <Controller
            name="cnpj"
            control={control}
            rules={{
              ...rules,
              validate: (value) => isCnpjValid(value) || "CNPJ inválido",
              maxLength: {
                value: 18,
                message: "CNPJ deve ter 14 dígitos",
              },
              minLength: {
                value: 18,
                message: "CNPJ deve ter 14 dígitos",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="CNPJ"
                variant="outlined"
                type="text"
                fullWidth
                helperText={errors.cnpj?.message}
                error={!!errors.cnpj}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  maxLength: 18,
                  minLength: 18,
                }}
                value={formatCnpj(String(field.value))}
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
