"use client";

import { Button, Grid, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Lead } from "@/src/types/lead/Lead";
import { CreateLead } from "@/src/types/lead/CreateLead";

type LeadFormBaseProps = {
  onSubmit: (data: any) => void;
  defaultValues?: CreateLead;
};

export const LeadFormBase = (props: LeadFormBaseProps) => {
  const { defaultValues, onSubmit } = props;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Lead>({
    defaultValues: {
      nomeFantasia: "",
      nomeRepresentante: "",
      telefoneRepresentante: "",
      emailRepresentante: "",
      observacao: "",
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
            name="nomeFantasia"
            control={control}
            rules={rules}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Nome Fantasia"
                error={!!errors.nomeFantasia}
                helperText={errors.nomeFantasia?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="nomeRepresentante"
            control={control}
            rules={rules}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Nome Representante"
                error={!!errors.nomeRepresentante}
                helperText={errors.nomeRepresentante?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="telefoneRepresentante"
            control={control}
            rules={{
              ...rules,
              pattern: {
                value: /^\d+$/,
                message: "Telefone deve conter apenas números",
              },
              maxLength: {
                value: 11,
                message: "Telefone deve ter 11 dígitos",
              },
              minLength: {
                value: 11,
                message: "Telefone deve ter 11 dígitos",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Telefone do representante"
                error={!!errors.telefoneRepresentante}
                helperText={errors.telefoneRepresentante?.message}
                type="tel"
                inputProps={{
                  maxLength: 11,
                  minLength: 11,
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="emailRepresentante"
            control={control}
            rules={{
              ...rules,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Endereço de email inválido",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Email do representante"
                error={!!errors.emailRepresentante}
                helperText={errors.emailRepresentante?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="observacao"
            control={control}
            rules={rules}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Observação"
                error={!!errors.observacao}
                helperText={errors.observacao?.message}
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
