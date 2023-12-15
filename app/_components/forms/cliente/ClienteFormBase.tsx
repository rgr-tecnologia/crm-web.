"use client";

import { Grid, TextField } from "@mui/material";
import { Cliente } from "@/app/_types/Cliente";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoadingButton } from "../../loadingButton/LoadingButton";

type FormData = Omit<Cliente, "id">;

type ClienteFormProps = {
  onSubmit: (formData: FormData) => void;
  defaultValues?: Cliente;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};

export function ClienteFormBase(props: ClienteFormProps) {
  const { onSubmit, defaultValues, isLoading } = props;
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
    await onSubmit(formData);
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
