"use client";
import { Divider, FormHelperText, Grid, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pt-br";
import dayjs from "dayjs";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { LoadingButton } from "../../ui/LoadingButton/LoadingButton";
import {
  CreateRepresentante,
  CreateRepresentanteSchema,
} from "@/src/types/Representante";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextField } from "../../FormTextField";

type RepresentanteFormBaseProps = {
  clienteId: string;
  onSubmit: (formData: CreateRepresentante) => void;
  isLoading: boolean;
  defaultValues?: Partial<CreateRepresentante>;
  buttonText?: string;
};

export const RepresentanteFormBase = (props: RepresentanteFormBaseProps) => {
  const { onSubmit, clienteId, isLoading, defaultValues } = props;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateRepresentante>({
    resolver: zodResolver(CreateRepresentanteSchema),
    defaultValues: {
      clienteId,
      nome: "",
      departamento: "",
      cargo: "",
      telefone: "",
      email: "",
      ativo: true,
      dataNascimento: new Date(),
      ...defaultValues,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} direction={"column"}>
        <Grid item>
          <Typography variant="h6">Dados gerais</Typography>
          <Divider />
        </Grid>
        <Grid item>
          <FormTextField name="nome" label="Nome" control={control} />
        </Grid>
        <Grid item>
          <FormTextField
            name="departamento"
            label="Departamento"
            control={control}
          />
        </Grid>
        <Grid item>
          <FormTextField name="cargo" label="Cargo" control={control} />
        </Grid>
        <Grid item>
          <Controller
            name="dataNascimento"
            control={control}
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
          <FormTextField name="telefone" label="Telefone" control={control} />
        </Grid>
        <Grid item xs={12}>
          <FormTextField name="email" label="Email" control={control} />
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
            {props.buttonText || "Salvar"}
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};
