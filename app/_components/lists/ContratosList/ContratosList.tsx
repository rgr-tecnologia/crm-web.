import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { Contrato } from "../../../_types/contrato/Contrato";
import { ContratosListActions } from "./ContratosListActions";

type ContratoListProps = {
  contratos: Contrato[];
};

export function ContratosList({ contratos }: ContratoListProps) {
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
        <Card
          key={contrato?.id}
          sx={{
            borderLeft: "4px solid",
            borderColor: contrato?.ativo ? "success.main" : "error.main",
          }}
        >
          <CardContent>
            <Grid
              container
              direction={"row"}
              spacing={2}
              justifyContent={"space-between"}
            >
              <Grid item>
                <Grid container direction={"column"} spacing={1}>
                  <Grid item>
                    <Typography fontWeight={"bold"} variant="body1">
                      {contrato?.titulo}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="caption"
                      fontWeight={"bold"}
                      color={contrato?.ativo ? "success.main" : "error.main"}
                    >
                      {contrato?.ativo ? "ATIVO" : "INATIVO"}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <ContratosListActions contrato={contrato} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
