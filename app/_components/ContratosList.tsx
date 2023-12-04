import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { Contrato } from "../_types/Contrato";
import { ContratosListActions } from "./lists/ContratosList/ContratosListActions";

type ContratoListProps = {
  contratos: Contrato[];
};

export function ContratosList(props: ContratoListProps) {
  const { contratos } = props;

  if (!contratos.length) {
    return (
      <Container>
        <Typography>Nenhum contrato cadastrado</Typography>
      </Container>
    );
  }

  return (
    <>
      {contratos.map((contrato) => (
        <Card key={contrato?.id}>
          <CardContent>
            <Grid container spacing={2} direction={"column"}>
              <Grid item>Descrição: {contrato?.titulo}</Grid>
              <Grid item>Valor: {contrato?.valor}</Grid>
            </Grid>
            <ContratosListActions contrato={contrato} />
          </CardContent>
        </Card>
      ))}
    </>
  );
}
