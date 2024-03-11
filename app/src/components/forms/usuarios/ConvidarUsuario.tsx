"use client";

import { UsuarioCreate } from "@/src/types/usuario/UsuarioCreate";
import { Grid, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { LoadingButton } from "../../loadingButton/LoadingButton";
import { useState } from "react";
import { convidarUsuario } from "@/src/lib/utils/usuario/convidarUsuario";

type ConvidarUsuarioProps = {};

export function ConvidarUsuario(props: ConvidarUsuarioProps) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UsuarioCreate>();
  const rules = {
    required: "Campo obrigatório",
  };

  const onSubmit = async (data: UsuarioCreate) => {
    setIsLoading(true);
    try {
      await convidarUsuario(data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} direction={"column"}>
        <Grid item>
          <Controller
            name="email"
            control={control}
            rules={rules}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                type="text"
                fullWidth
                helperText={errors.email?.message}
                error={!!errors.email}
                InputLabelProps={{ shrink: true }}
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
