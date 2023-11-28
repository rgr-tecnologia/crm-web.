"use client";

import { Cliente } from "@/app/_types/Cliente";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, set, useForm } from "react-hook-form";
import { updateCliente } from "../../_lib/updateCliente";
import { createCliente } from "../../_lib/createCliente";
import { useState } from "react";

type ClienteFormProps = {
  cliente?: Cliente;
};

export function ClienteForm(props: ClienteFormProps) {
  const { cliente } = props;

  const [success, setSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<Error[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isNotifierOpen, setIsNotifierOpen] = useState<boolean>(false);

  const { handleSubmit, control, reset } = useForm({
    defaultValues: cliente || {
      id: undefined,
      nomeFantasia: "",
    },
  });

  const onSubmit = async (formData: Cliente) => {
    const { id } = formData;
    setLoading(true);

    try {
      if (id) {
        await updateCliente(id, formData);
      } else {
        await createCliente(formData);
      }
      reset();
      setLoading(false);
      setSuccess(true);
      setIsNotifierOpen(true);
    } catch (error) {
      if (error instanceof Error) {
        setLoading(false);
        setErrors([error]);
        setIsNotifierOpen(true);
      }
    }
  };

  const handleClose = () => {
    setIsNotifierOpen(false);
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h6">Editar cliente</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Salvar
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Snackbar open={Boolean(errors)} onClick={handleClose}>
        <Alert severity="error" onClose={handleClose}>
          {errors?.map((error) => error.message)}
        </Alert>
      </Snackbar>
    </>
  );
}
