"use client";

import { Representate } from "@/app/_types/Representante";
import {
  Button,
  Divider,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";

type RepresentanteFormBaseProps = {
  onSubmit: (data: any) => void;
};

export const RepresentanteFormBase = (props: RepresentanteFormBaseProps) => {
  const { onSubmit } = props;

  const { control, handleSubmit } = useForm<Representate>({
    defaultValues: {
      status: "ATIVO",
      nome: "fasdfasdf",
      departamento: "asdfasdf",
      cargo: "asdfasdf",
      dataNascimento: new Date(),
      telefone: "51235123",
      email: "fasdfsadf@fasdfsadf",
      endereco: {
        cep: "23452345",
        logradouro: "asdfasdf",
        numero: "213412",
        complemento: "asdfasdf",
        bairro: "asdfadf",
        cidade: "asdfasdf",
        estado: "asdfasdf",
      },
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} direction={"column"}>
        <Grid item>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <Select {...field} fullWidth>
                <MenuItem value={"ATIVO"}>Ativo</MenuItem>
                <MenuItem value={"INATIVO"}>Inativo</MenuItem>
              </Select>
            )}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6">Dados gerais</Typography>
          <Divider />
        </Grid>
        <Grid item>
          <Controller
            name="nome"
            control={control}
            render={({ field }) => (
              <TextField label="Nome" variant="outlined" {...field} fullWidth />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="departamento"
            control={control}
            render={({ field }) => (
              <TextField
                label="Departamento"
                variant="outlined"
                {...field}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="cargo"
            control={control}
            render={({ field }) => (
              <TextField
                label="Cargo"
                variant="outlined"
                {...field}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="dataNascimento"
            control={control}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Data de nascimento" {...field} />
              </LocalizationProvider>
            )}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6">Dados de contato</Typography>
          <Divider />
        </Grid>
        <Grid item>
          <Controller
            name="telefone"
            control={control}
            render={({ field }) => (
              <TextField
                label="Telefone"
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
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                label="Email"
                variant="outlined"
                {...field}
                fullWidth
                type="email"
              />
            )}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6">Dados de endereço</Typography>
          <Divider />
        </Grid>
        <Grid item>
          <Controller
            name="endereco.cep"
            control={control}
            render={({ field }) => (
              <TextField
                label="CEP"
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
        </Grid>

        <Grid item>
          <Button variant={"contained"} type="submit" fullWidth>
            Salvar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
