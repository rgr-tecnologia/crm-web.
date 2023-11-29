"use client";

import { Button, Grid, TextField } from "@mui/material";
import { Cliente } from "@/app/_types/Cliente";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type FormData = Omit<Cliente, "id">;

type ClienteFormProps = {
  onSubmit: (formData: FormData) => void;
  defaultValues?: Cliente;
};

export function ClienteFormBase(props: ClienteFormProps) {
  const { onSubmit, defaultValues } = props;
  const router = useRouter();

  const { handleSubmit, control, reset } = useForm<FormData>({
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues]);

  const onSubmitForm = async (formData: FormData) => {
    onSubmit(formData);
    router.refresh();
    reset(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Grid container spacing={2} direction={"column"}>
        <Grid item>
          <Controller
            name="nomeFantasia"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nome fantasia"
                variant="outlined"
                type="text"
                fullWidth
                required
              />
            )}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Salvar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
