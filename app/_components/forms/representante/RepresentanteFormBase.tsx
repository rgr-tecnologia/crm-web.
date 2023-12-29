"use client";

import { CreateRepresentante } from "@/app/_types/representante/CreateRepresentante";
import {
  Divider,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pt-br";
import dayjs from "dayjs";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { LoadingButton } from "../../loadingButton/LoadingButton";

type RepresentanteFormBaseProps = {
  onSubmit: (formData: CreateRepresentante) => void;
  defaultValues?: Partial<CreateRepresentante>;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};

export const RepresentanteFormBase = (props: RepresentanteFormBaseProps) => {
  const { onSubmit, defaultValues, isLoading } = props;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateRepresentante>({
    defaultValues: {
      ...defaultValues,
      ativo: true,
      dataNascimento: new Date(),
    },
  });

  const rules = {
    required: "Campo obrigatório",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} direction={"column"}>
        <Grid item>
          <Typography variant="h6">Dados gerais</Typography>
          <Divider />
        </Grid>
        <Grid item>
          <Controller
            name="nome"
            control={control}
            rules={rules}
            render={({ field }) => (
              <TextField
                label="Nome"
                variant="outlined"
                {...field}
                fullWidth
                error={!!errors.nome}
                helperText={errors.nome?.message}
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="departamento"
            control={control}
            rules={rules}
            render={({ field }) => (
              <TextField
                label="Departamento"
                variant="outlined"
                {...field}
                fullWidth
                error={!!errors.departamento}
                helperText={errors.departamento?.message}
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="cargo"
            control={control}
            rules={rules}
            render={({ field }) => (
              <TextField
                label="Cargo"
                variant="outlined"
                {...field}
                fullWidth
                error={!!errors.cargo}
                helperText={errors.cargo?.message}
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="dataNascimento"
            control={control}
            rules={rules}
            render={({ field }) => (
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={"pt-br"}
              >
                <DatePicker
                  label="Data de nascimento"
                  {...field}
                  value={dayjs(field.value)}
                  sx={{ width: "100%" }}
                />
                {errors.dataNascimento && (
                  <FormHelperText error={!!errors.dataNascimento}>
                    {errors.dataNascimento?.message}
                  </FormHelperText>
                )}
              </LocalizationProvider>
            )}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6">Dados de contato</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="telefone"
            control={control}
            rules={{
              ...rules,
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
                label="Telefone"
                error={!!errors.telefone}
                helperText={errors.telefone?.message}
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
            name="email"
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
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
        </Grid>
        {/* {<Grid item>
          <Typography variant="h6">Dados de endereço</Typography>
          <Divider />
        </Grid>
        <Grid item>
          <Controller
            name="endereco.cep"
            control={control}
            rules={{
              maxLength: {
                value: 8,
                message: "CEP deve ter 8 dígitos",
              },
              minLength: {
                value: 8,
                message: "CEP deve ter 8 dígitos",
              },
            }}
            render={({ field }) => (
              <TextField
                label="CEP"
                variant="outlined"
                {...field}
                fullWidth
                type="number"
                inputProps={{
                  maxLength: 8,
                  minLength: 8,
                }}
              />
            )}
          />
        </Grid>

        <Grid item>
          <Controller
            name="endereco.logradouro"
            control={control}
            render={({ field }) => (
              <TextField
                label="Logradouro"
                variant="outlined"
                {...field}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="endereco.numero"
            control={control}
            render={({ field }) => (
              <TextField
                label="Número"
                variant="outlined"
                {...field}
                fullWidth
                type="number"
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="endereco.complemento"
            control={control}
            render={({ field }) => (
              <TextField
                label="Complemento"
                variant="outlined"
                {...field}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="endereco.bairro"
            control={control}
            render={({ field }) => (
              <TextField
                label="Bairro"
                variant="outlined"
                {...field}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="endereco.cidade"
            control={control}
            render={({ field }) => (
              <TextField
                label="Cidade"
                variant="outlined"
                {...field}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="endereco.estado"
            control={control}
            render={({ field }) => (
              <TextField
                label="Estado"
                variant="outlined"
                {...field}
                fullWidth
              />
            )}
          />
        </Grid>} */}

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
};
