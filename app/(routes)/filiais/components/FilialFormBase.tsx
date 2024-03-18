"use client";
import {
  Divider,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { LoadingButton } from "@/src/components/ui/LoadingButton/LoadingButton";
import { useEffect } from "react";
import { FilialCreate, FilialCreateSchema } from "@/src/types/Filial";
import { FormTextField } from "@/src/components/FormTextField";
import { Cliente } from "@/src/types/cliente/Cliente";
import { zodResolver } from "@hookform/resolvers/zod";

type FilialFormBaseProps = {
  clientes: Cliente[];
  onSubmit: (formData: FilialCreate) => void;
  defaultValues?: FilialCreate;
  isLoading: boolean;
};

export function FilialFormBase(props: FilialFormBaseProps) {
  const { clientes, onSubmit, defaultValues, isLoading } = props;

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FilialCreate>({
    resolver: zodResolver(FilialCreateSchema),
    defaultValues: {
      nome: "teste",
      cnpj: "23.863.977/0001-38",
      telefone: "+5511993124212",
      clienteId: clientes[0].id,
      filialEndereco: {
        logradouro: "teste",
        numero: "teste",
        bairro: "teste",
        cidade: "teste",
        estado: "teste",
        cep: "teste",
      },

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
          <Controller
            name="clienteId"
            control={control}
            render={({ field, formState: { errors } }) => (
              <>
                <Select
                  {...field}
                  label="Cliente"
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
        <Grid item>
          <FormTextField control={control} name="nome" label="Razão social" />
        </Grid>
        <Grid item>
          <FormTextField control={control} name="cnpj" label="CNPJ" />
        </Grid>
        <Grid item>
          <FormTextField control={control} name="telefone" label="Telefone" />
        </Grid>
        <Grid item>
          <Typography variant="h6" component="h2">
            Dados de endereço
          </Typography>
          <Divider />
        </Grid>
        <Grid item>
          <FormTextField
            control={control}
            name="filialEndereco.cep"
            label="CEP"
          />
        </Grid>
        <Grid item>
          <FormTextField
            control={control}
            name="filialEndereco.logradouro"
            label="Logradouro"
          />
        </Grid>
        <Grid item>
          <FormTextField
            control={control}
            name="filialEndereco.numero"
            label="Número"
          />
        </Grid>
        <Grid item>
          <FormTextField
            control={control}
            name="filialEndereco.bairro"
            label="Bairro"
          />
        </Grid>
        <Grid item>
          <FormTextField
            control={control}
            name="filialEndereco.cidade"
            label="Cidade"
          />
        </Grid>
        <Grid item>
          <FormTextField
            control={control}
            name="filialEndereco.estado"
            label="Estado"
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
