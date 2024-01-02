import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Cliente } from "@/app/_types/cliente/Cliente";
import { ClientesListActions } from "./ClientesListActions";
import { ListOrderIdentifier } from "../ListOrderIdentifier/ListOrderIdentifier";

type ClientesCardListProps = {
  clientes: Cliente[];
};

export function ClientesCardList({ clientes }: ClientesCardListProps) {
  return (
    <Grid
      container
      sx={{
        width: "100%",
      }}
      spacing={2}
      direction={"column"}
    >
      {clientes.map((cliente, index) => {
        const { nomeFantasia, createdAt, updatedAt } = cliente;
        return (
          <Grid item key={cliente.id}>
            <Card
              sx={{
                borderLeft: "4px solid",
                borderColor: cliente?.ativo ? "success.main" : "error.main",
              }}
            >
              <CardContent>
                <Grid
                  container
                  justifyContent={"space-between"}
                  direction={"row"}
                  spacing={2}
                >
                  <Grid item container direction={"row"}>
                    <Grid item>
                      <ListOrderIdentifier index={index} />
                    </Grid>
                    <Grid item container direction={"column"}>
                      <Grid item>
                        <Typography variant="body1" fontWeight={"bold"}>
                          {nomeFantasia}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">
                          {`Criado em: ${createdAt.toLocaleDateString()}`}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">
                          {`Atualizado em: ${updatedAt.toLocaleDateString()}`}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <ClientesListActions cliente={cliente} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
