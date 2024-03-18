"use client";

import { Grid, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { LoadingButton } from "@/src/components/ui/LoadingButton/LoadingButton";
import { useEffect } from "react";
import {
  ClienteCreate,
  ClienteCreateSchema,
} from "@/src/types/cliente/Cliente";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextField } from "@/src/components/FormTextField";

type ClienteFormProps = {
  onSubmit: (formData: ClienteCreate) => void;
  defaultValues?: ClienteCreate;
  isLoading: boolean;
};

export function ClienteFormBase(props: ClienteFormProps) {
  const { onSubmit, defaultValues, isLoading } = props;

  const { handleSubmit, control, reset } = useForm<ClienteCreate>({
    resolver: zodResolver(ClienteCreateSchema),
    defaultValues: {
      nomeFantasia: "",
      ativo: true,
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
      <Grid container spacing={2} direction={"column"}>
        <Grid item>
          <FormTextField
            name="nomeFantasia"
            label="Nome fantasia"
            control={control}
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
