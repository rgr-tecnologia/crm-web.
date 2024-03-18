"use client";

import { Button, FormHelperText, Grid, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { CreateLead, CreateLeadSchema } from "@/src/types/Lead";
import { Cliente } from "@/src/types/cliente/Cliente";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextField } from "@/src/components/FormTextField";

type LeadFormBaseProps = {
  onSubmit: (data: CreateLead) => void;
  defaultValues?: CreateLead;
  clientes: Cliente[];
};

export function LeadFormBase(props: LeadFormBaseProps) {
  const { defaultValues, onSubmit, clientes } = props;
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateLead>({
    resolver: zodResolver(CreateLeadSchema),
    defaultValues: {
      nomeRepresentante: "",
      emailRepresentante: "",
      telefoneRepresentante: "",
      observacao: "",
      clienteId: clientes[0].id,
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
          <Controller
            name="clienteId"
            control={control}
            render={({ field }) => (
              <>
                <Select
                  {...field}
                  error={Boolean(errors.clienteId?.message)}
                  fullWidth
                >
                  {clientes?.map((cliente) => (
                    <MenuItem value={cliente.id} key={cliente.id}>
                      {cliente.nomeFantasia}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{errors.clienteId?.message}</FormHelperText>
              </>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextField
            name="nomeRepresentante"
            label="Nome do representate"
            control={control}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextField
            name="emailRepresentante"
            label="Email do representante"
            control={control}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextField
            name="telefoneRepresentante"
            label="Telefone do representante"
            control={control}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextField
            name="observacao"
            label="Observação"
            control={control}
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
}
