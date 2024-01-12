import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { ListOrderIdentifier } from "../ListOrderIdentifier/ListOrderIdentifier";
import { Contrato } from "@/app/_types/contrato/Contrato";
import { ContratosListActions } from "./ContratosListActions";
import Link from "next/link";

type ContratosCardListProps = {
  contratos: Contrato[];
  viewMode?: boolean;
};

export function ContratosCardList({
  contratos,
  viewMode,
}: ContratosCardListProps) {
  return (
    <Grid container spacing={2}>
      {contratos.map((contrato, index) => {
        const {
          titulo,
          createdAt,
          updatedAt,
          ativo,
          oportunidadeId,
          representanteId,
          clienteId,
          valor,
        } = contrato;
        return (
          <Grid item key={contrato.id} xs={12}>
            <Card
              sx={{
                width: "100%",
                borderLeft: "4px solid",
                borderColor: "primary.main",
              }}
            >
              <CardContent>
                <Grid container direction={"row"} spacing={4}>
                  <Grid item>
                    <ListOrderIdentifier index={index} />
                  </Grid>

                  <Grid container item spacing={1} direction={"column"} xs={10}>
                    <Grid item>
                      <Typography variant="caption">Título</Typography>
                      <Typography variant="body1" fontWeight={"bold"}>
                        {titulo}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="caption">
                        Oportunidade relacionada
                      </Typography>
                      <Link
                        href={`/clientes/${clienteId}/oportunidades/${oportunidadeId}`}
                        passHref
                      >
                        <Typography variant="body1" fontWeight={"bold"}>
                          {oportunidadeId}
                        </Typography>
                      </Link>
                    </Grid>
                    <Grid item>
                      <Typography variant="caption">
                        Representante responsável
                      </Typography>
                      <Link
                        href={`/clientes/${clienteId}/representantes/${representanteId}`}
                        passHref
                      >
                        <Typography variant="body1" fontWeight={"bold"}>
                          {representanteId}
                        </Typography>
                      </Link>
                    </Grid>

                    <Grid item>
                      <Divider />
                    </Grid>
                    <Grid
                      item
                      container
                      direction={"row"}
                      justifyContent={"space-between"}
                    >
                      <Grid container item direction={"row"} spacing={1} xs>
                        <Grid item>
                          <Typography variant="caption">Status</Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="body2"
                            color={
                              contrato?.ativo ? "success.main" : "error.main"
                            }
                            fontWeight={"bold"}
                          >
                            {ativo ? "ATIVO" : "INATIVO"}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container item direction={"row"} spacing={1} xs>
                        <Grid item>
                          <Typography variant="caption">
                            Data de criação
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body1" fontWeight={"bold"}>
                            {createdAt.toLocaleDateString()}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container item direction={"row"} spacing={1} xs>
                        <Grid item>
                          <Typography variant="caption">
                            Data de atualização
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body1" fontWeight={"bold"}>
                            {updatedAt.toLocaleDateString()}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container item direction={"row"} spacing={1} xs>
                        <Grid item>
                          <Typography variant="caption">
                            Valor do contrato
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body1" fontWeight={"bold"}>
                            {valor.toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  {viewMode && (
                    <Grid item>
                      <ContratosListActions contrato={contrato} />
                    </Grid>
                  )}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
